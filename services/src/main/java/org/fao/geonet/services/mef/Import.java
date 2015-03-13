//=============================================================================
//===	Copyright (C) 2001-2007 Food and Agriculture Organization of the
//===	United Nations (FAO-UN), United Nations World Food Programme (WFP)
//===	and United Nations Environment Programme (UNEP)
//===
//===	This program is free software; you can redistribute it and/or modify
//===	it under the terms of the GNU General Public License as published by
//===	the Free Software Foundation; either version 2 of the License, or (at
//===	your option) any later version.
//===
//===	This program is distributed in the hope that it will be useful, but
//===	WITHOUT ANY WARRANTY; without even the implied warranty of
//===	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
//===	General Public License for more details.
//===
//===	You should have received a copy of the GNU General Public License
//===	along with this program; if not, write to the Free Software
//===	Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA
//===
//===	Contact: Jeroen Ticheler - FAO - Viale delle Terme di Caracalla 2,
//===	Rome - Italy. email: geonetwork@osgeo.org
//==============================================================================

package org.fao.geonet.services.mef;

import jeeves.constants.Jeeves;
import jeeves.server.ServiceConfig;
import jeeves.server.context.ServiceContext;
import org.fao.geonet.Util;
import org.fao.geonet.constants.Geonet;
import org.fao.geonet.constants.Params;
import org.fao.geonet.kernel.mef.MEFLib;
import org.fao.geonet.services.NotInReadOnlyModeService;
import org.fao.geonet.utils.IO;
import org.jdom.Element;

import java.nio.file.Path;
import java.util.Iterator;
import java.util.List;

/**
 * Import MEF file.
 *
 */
public class Import extends NotInReadOnlyModeService {
	private Path stylePath;

    /**
     *
     * @param appPath
     * @param params
     * @throws Exception
     */
    @Override
	public void init(Path appPath, ServiceConfig params) throws Exception {
        super.init(appPath, params);
		this.stylePath = appPath.resolve(Geonet.Path.IMPORT_STYLESHEETS);
	}

	/**
	 * Service to import MEF File.
	 *
	 *
	 * @param params
	 *            List of parameters:
	 *            <ul>
	 *            <li>mefFile: file to upload</li>
	 *            <li>file_type: "single" for loading a single XML file, "mef" to
	 *            load MEF file (version 1 or 2). "mef" is the default value.</li>
	 *            </ul>
	 *
	 * @return List of imported ids.
	 *
	 */
    @Override
	public Element serviceSpecificExec(Element params, ServiceContext context)
			throws Exception {
		String mefFile = Util.getParam(params, "mefFile");
        String fileType = Util.getParam(params, "file_type", "mef");
		Path uploadDir = context.getUploadDir();

		Path file = uploadDir.resolve(mefFile);

		List<String> id = MEFLib.doImport(params, context, file, stylePath);
        StringBuilder ids = new StringBuilder();

        Iterator<String> iter = id.iterator();
        while (iter.hasNext()) {
            String item = iter.next();
            ids.append(item).append(";");
        }

        IO.deleteFile(file, false, Geonet.MEF);

		Element result;

        if (context.getService().equals("mef.import")) {

            result = new Element("id");
            result.setText(ids.toString());

        } else {

            result = new Element(Jeeves.Elem.RESPONSE);
            if ((fileType.equals("single") && (id.size() == 1))) {
                result.addContent(new Element(Params.ID).setText(id.get(0) +""));
            } else {
                result.addContent(new Element("records").setText(id.size() +""));

            }

        }

		// --- return success with all metadata id
		return result;
	}
}