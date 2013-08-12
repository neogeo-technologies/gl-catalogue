/*
 * Copyright (C) 2009 GeoNetwork
 *
 * This file is part of GeoNetwork
 *
 * GeoNetwork is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * GeoNetwork is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GeoNetwork.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.namespace('GeoNetwork', 'GeoNetwork.Lang');

GeoNetwork.Lang.ca={
    'metadata-not-found': 'Metadata with UUID ${uuid} not found or not shared with you.',
    'harvestingAdmin': 'Harvesting',
    'updateUserInfo': 'Edit my profile',
    'updatePassword': 'Change my password',
    'myMetadata': 'My metadata',
    '_owner': 'User identifier',
    '_isHarvested': 'Harvested records',
    'templates': 'Metadata templates',
    'myDraft': 'My draft metadata',
    'QuickSearch': 'Quick search',
    'LastSubmitted': 'Last submitted',
    'lastUpdates': 'Last update',
    '_indexingError': 'Indexing error',
    'RecordWithIndexingError': 'Records with indexing error',
    'fromLocalCatalog': 'Metadata from local catalog',
    'fromHarvestedCatalog': 'Metadata from harvested catalogs',
    'dateType': 'Tipus de data',
    'tempExtent': 'Extensió temporal',
    'creationDate': 'Data de creació',
    'modificationDate': 'Data de modificació',
    'publicationDate': 'Data de publicació',
    'previousPage': 'Tornar a la pàgina anterior',
    'nextPage': 'Anar a la pàgina següent',
    'upInPage': 'Desplaçar cap amunt als resultats',
    'downInPage': 'Desplaçar cap avall als resultats',
    'example': 'Exemple:',
    'noInfo': 'Cap informació',
    'helper': "Suggeriment:",
    'toggleLayerManager': 'Mostrar el gestor de capes',
    'tagName': 'Nom de l\'element:',
    'enableTooltip': 'Activar l\'indicador de funció per obtenir més informació de cada camp.',
    'connectIssue': "Problemes amb la connexió al catàleg",
    'connectIssueMsg': "Error 404. Impossible connectar amb el catàleg de la URL ",
    'featureInfoTooltipTitle': "Informació de l'entitat",
    'featureInfoTooltipText': "Punxi sobre el mapa per obtenir informació de les entitats de totes les capes visibles.",
    'zoomToMaxExtentTooltipTitle': "Extensió total",
    'zoomToMaxExtentTooltipText': "Utilitzi aquest botó per visualitzar l'extensió total del mapa.",
    'zoominTooltipTitle': "Apropar",
    'zoominTooltipText': "Dibuixi una capsa en el mapa per apropar-se a la zona. També pot punxar sobre el mapa per apropar-se un factor de 2.",
    'zoomoutTooltipTitle': "Allunyar",
    'zoomoutTooltipText': "Punxi sobre el mapa o dibuixi una capsa per allunyar-se.",
    'dragTooltipTitle': "Desplaçar el mapa",
    'dragTooltipText': "Premi el botó esquerre de ratolí per desplaçar el mapa.",
    'previousTooltipTitle': "Vista anterior",
    'previosTooltipText': "Premi aquest botó per anar a la vista anterior del mapa",
    'nextTooltipTitle': "Vista següent",
    'nextTooltipText': "Premi aquest botó per anar a la vista següent del mapa",
    'featureInfoTitle': "Informació de l'entitat",
    'layerManagerTabTitle': "Gestió de capes",
    'legendTabTitle': "Llegenda",
    'scaleTitle': "Escala",
    'xTitle': "X",
    'yTitle': "Y",
    'projectionTitle': "Projecció",
    'FeatureInfoNotQueryable': "No hi ha cap capa consultable",
    'WMSBrowserTab1': "Seleccionar",
    'WMSBrowserTab3': "Extern",
    'WMSBrowserPreviewTitle': "Previsualització de la capa",
    'WMSBrowserAddButton': "Afegir",
    'WMSBrowserDuplicateMsg': "La capa ja està al mapa",
    'WMSBrowserPreviewWaitMsg': "Recuperar la imatge anterior",
    'WMSBrowserConnectButton': "Connectar",
    'WMSBrowserConnectError': "Error de connexió al servidor WMS. Si us plau, verifiqui la URL.",
    'infoTitle': "Informació",
    'mf.print.mapTitle': "Títol",
    'mf.print.comment': "Commentari",
    'mf.print.dpi': "Resolució",
    'mf.print.scale': "Escala",
    'mf.print.rotation': "Angle",
    'mf.print.resetPos': "Esborrar",
    'mf.print.print': "Imprimir",
    'mf.print.generatingPDF': "Generant PDF",
    'mf.print.unableToPrint': "No ha estat possible imprimir, intenti-ho més tard",
    'mf.error': "Error",
    'selectExtentTooltipTitle': "Seleccionar una zona",
    'selectExtentTooltipText': "Seleccionar una zona per cercar al catàleg",
    'clearExtentTooltipTitle': "Eliminar zona",
    'clearExtentTooltipText': "Esborrar zona (és a dir, cap criteri espacial)",
    'printTooltipTitle': "Imprimir",
    'printTooltipText': "Imprimir el mapa actual",
    'savewmcTooltipTitle': "Guardar el context de mapa web (WMC)",
    'savewmcTooltipText': "Guardar el context de mapa web a un arxiu",
    'saveWMCFile.windowTitle': "Guardar el context de mapa web (WMC)",
    'saveWMCFile.errorSaveWMC': "No s'ha pogut guardar el context de mapa web (WMC)",
    'loadwmcTooltipTitle': "Carregar un context de mapa web (WMC)",
    'loadwmcTooltipText': "Carregar un context de mapa web des d'un arxiu en el mapa actual",
    'selectWMCFile.windowTitle': "Carregar un context de mapa web (WMC)",
    'selectWMCFile': "Seleccionar arxiu de context de mapa web (WMC)",
    'selectWMCFile.waitLoadingWMC': "Carregant un context de mapa web (WMC)",
    'selectWMCFile.loadButtonText': "Carregar",
    'selectWMCFile.mergeButtonText': "Fusionar",
    'selectWMCFile.errorLoadingWMC': "No ha estat possible carregar el context de mapa web (WMC)",
    'opacityButtonText': "Opacitat",
    'opacityWindowTitle': "Opacitat",
    'metadataButtonText': "Metadada",
    'removeButtonText': "Esborrar",
    'addWMSButtonText': "Afegir WMS",
    'addWMSWindowTitle': "Afegir capa d'un servei WMS",
    'layerInfoPanel.windowTitle': "Metadades de la capa",
    'layerInfoPanel.titleField': "Títol",
    'layerInfoPanel.descriptionField': "Descripció",
    'layerInfoPanel.queryableField': "Consultable",
    'layerList': "Llista de capes",
    'baseLayerList': "Capes base",
    'overlaysList': "Overlays",
    'metadataResults.buttonText': "Resultats",
    'metadataResults.tooltipTitle': "Resultats",
    'metadataResults.tooltipText': "Anar a la pàgina de resultats ",
    'metadataResults.alertTitle': "Resultats",
    'metadataResults.alertText': "Cap resultat a mostrar",
    'featureInfoWindow.windowTitle': "Informació d'entitat",
    'mf.information': "Imprimir",
    'mf.print.pdfReady': "PDF llest",
    'loadLayer.loadingMessage': "Carregant capa",
    'loadLayer.error.title': "Carregar capa",
    'loadLayer.error.message': "La capa no s'ha pogut carregar",
    'disclaimer.windowTitle': "Disclaimer",
    'disclaimer.loading': "Carregant...",
    'disclaimer.buttonClose': "Tancar",
    'gazetteerAddressField1Label': "Codi postal",
    'gazetteerAddressField2Label': "Carrer",
    'gazetteerAddressField3Label': "Lloc",
    'gazetteerAddressField4Label': "Municipi",
    'gazetteerAddressField5Label': "Portal",
    'searchOptionButton': "Buscar",
    'resetSearchForm': "Reinicialitzar el formulari de cerca.",
    'GazetteerWindowTitle': "Buscar adreça",
    'searchResults': "Resultats de la cerca",
    'errorTitle': "Error",
    'SearchOptionLoadFailureMsg': "No hi ha resultats. \n El servei potser no està disponible. \n",
    'gazetteerTooltipTitle': "Cerca basada en adreça",
    'gazetteerTooltipText': "Cerca per localització, codi postal, carrer, municipi o lloc.",
    'SearchOptionNoResults': "No s'ha trobat cap resultat",
    'zoomlayerTooltipTitle': "Zoom a la capa",
    'zoomlayerTooltipText': "Usi aquest botó per anar a l'extensió màxima de la capa seleccionada.",
    'zoomlayer.selectLayerTitle': "Zoom a la capa",
    'zoomlayer.selectLayerText': "Cap capa seleccionada",
    'layerStylesWindowTitle': "Estils de capa",
    'layerStylesPreviewTitle': "Previsualitzar llegenda",
    'selectStyleButton': "Seleccionar estil",
    'WMSTimeWindowTitle': "WMS Time",
    'WMSTimePositionTitle': "Seleccionar una posició en el temps",
    'WMSTimeMovieTitle': "Executar animació",
    'wmsTimeUpdateButtonText': "Aplicar",
    'WMSTimeAnimationCheckbox': "Play a movie loop spanning the last ${steps} time positions",
    'fullTextSearch': "Cerca completa de text",
    'keyword': "Paraules clau",
    'org': "Organització",
    'mapTypes': "Tipus de mapa",
    'rsIdentifier': "Identificador de recurs",
    'inspireSearchOptions': 'criteris INSPIRE',
    'inspireannex': 'annex INSPIRE',
    'inspirerelated': 'Relacionat amb INSPIRE',
    'inspirerelatedtt': 'Conjunt de dades INSPIRE que informen sobre la conformitat respecte a les especificacions de dades',
    'inspiretheme': 'temes INSPIRE',
    'inspireClassificationDataServices': 'INSPIRE classification data services',
    'serviceType': 'Tipus de servei',
    'serviceType_discovery': 'Discovery Service (discovery)',
    'serviceType_download': 'Download Service (download)',
    'serviceType_view': 'View Service (view)',
    'serviceType_transformation': 'Transformation Service (transformation)',
    'serviceType_invoke': 'Invoke Spatial Data Service (invoke)',
    'serviceType_other': 'Other Services (other)',
    'similarity': 'Search accuracy',
    'wkt': 'geomentria WKT',
    'simpleViewMode': 'Simple view',
    'spatialSearch': 'Criteris espacials',
    'mdChangeDate': 'Data d\'actualització de la metadada',
    'tempExtent': 'Extensió temporal',
    'hitsPerPage': 'Número per pàgina',
    'sortBy': 'Ordenar per',
    'relevance': 'Rellevància',
    'options': 'Opcions',
    'title': 'Títol',
    'changeDate': 'Data d\'actualització',
    'rating': 'Ràting',
    'popularity': 'Popularitat',
    'scaleDesc': 'Escala (desc)',
    'scaleAsc': 'Escala (asc)',
    'abstract': 'Resum',
    'catalogue': 'Catàleg',
    'group': 'Grup',
    'chooseGroup': 'Seleccionar un grup',
    'md': 'Metadada',
    'tpl': 'Plantilla',
    'category': 'Categoria',
    'advTextSearch': 'Opcions avançades de cerca de text',
    'eitherWords': 'Almenys una de les paraules',
    'exactPhrase': 'Frase exacta',
    'allWords': 'Totes les paraules',
    'withoutWords': 'Sense les paraules',
    'precise': 'Precisa',
    'imprecise': 'Imprecisa',
    'relationType': 'Tipus de relació',
    'within': 'dins',
    'touches': 'toca',
    'crosses': 'travessa',
    'fullyOutsideOf': 'completament fora',
    'encloses': 'conté',
    'overlaps': 'superposa',
    'intersection': 'intersecció',
    'nearYou': 'A prop',
    'from': 'Des de',
    'to': 'a',
    'scaleNominator': '1: ',
    'scale': 'Escala',
    'digital': 'Digital',
    'hardCopy': 'Còpia en paper',
    'download': 'Descarregar',
    'downloadable': 'Descarregable',
    'interactive': 'Interactiu',
    'resourceType': 'Tipus de recurs',
    'dataset': 'Conjunt de dades',
    'series': 'Sèrie',
    'service': 'Servei',
    'model': 'Catàleg d\'entitats',
    'spatialRepType': 'Representació espacial',
    'video': 'Vídeo',
    'vector': 'Vector',
    'textTable': 'Text, taula',
    'tin': 'Tin',
    'stereoModel': 'Model estèreo',
    'grid': 'Raster',
    'kind': 'Tipus',
    'enterGetCapURL': 'Introdueixi la URL d\'un GetCapabilities per enregistrar un nou servei.',
    'edit': 'Editar',
    'duplicate': 'Duplicar',
    'delete': 'Esborrar',
    'createChild': 'Crear fill',
    'privileges': 'Privilegis',
    'privilegesTT': 'Gestionar els privilegis per a l\'accés públic i per als grups de catàleg.',
    'categories': 'Categories',
    'otherActions': 'Altres accions',
    'permalinkInfo': 'Paste link in email or IM',
    'view': 'Consultar',
    'zoomTo': 'Zoom a',
    'saveXml': 'Salvar com a XML',
    'exportCsv': 'Exportar (CSV)',
    'exportZip': 'Exportar (ZIP)',
    'printSel': 'Exportar (PDF)',
    'printTT': 'Imprimir. Obrir una nova pàgina per imprimir.',
    'newOwner': 'Nou propietari',
    'updateCategories': 'Actualitzar categories',
    'updatePrivileges': 'Actualitzar privilegis',
    'noneSelected': 'Cap seleccionat',
    'none': 'cap',
    'all': 'tots',
    'allInPage': 'tots els de la pàgina',
    'select': 'Seleccionar ',
    'username': 'usuari',
    'password': 'contrasenya',
    'login': 'Connexió',
    'logout': 'Desconnexió',
    'administration': 'Administració',
    'validationReport': 'Informe de validació',
    'setStatus': 'Estat de la metadada',
    'status': 'Estat',
    'updateStatus': 'Actualitzar estat',
    'currentStatus': ' (current status is ${status})',
    'enableWorkflow': 'Enable worklow',
    'enableWorkflowTT': 'Set metadata status to draft and enable workflow',
    'enableWorkflowStart': 'Metadata status set to draft.',
    'updateVersion': 'Activar versionat',
    'addLayerSelection': 'Add layers of selection to the map',
    'statusTT': 'Canviar l\'estat d\'un registre segons la fase del seu cicle de vida',
    'setVersioning': 'Versionat de metadades',
    'versioning': 'Activar versionat',
    'versioningTT': 'Un cop activat, tots els canvis realitzats a la metadada es guardaran al repositoru SVN',
    'items': 'ítems',
    'item': 'ítem',
    'thumbnails': 'Miniatures',
    'noimages': 'Cap imatge disponible',
    'add': 'Afegir',
    'small': 'Petit',
    'large': 'Gran',
    'selectImage': 'Seleccionar una imatge',
    'selectFile': 'Seleccionar un arxiu',
    'image': 'Imatge',
    'uploading': 'Carregant ...',
    'upload': 'Carregar',
    'success': 'Èxit',
    'failure': 'Error',
    'error': 'Error',
    'save': 'Salvar',
    'reset': 'Reinicialitzar',
    'fileProcessedMsg': ' Arxiu ${res} processat al servidor',
    'suggestion': 'Suggeriment',
    'logoSelect': 'Seleccionar un logo',
    'relatedResources': 'Recursos relacionats',
    'add-thumbnail': 'Add thumbnail',
    'add-onlinesrc': 'Add online resource',
    'add-parent': 'Link to a parent',
    'add-service': 'Link to a service',
    'add-dataset': 'Link to a dataset',
    'add-sources': 'Link to a source dataset',
    'add-fcats': 'Link to a feature catalog',
    'add-sibling': 'Link to other resources',
    'fcats': 'Feature catalog',
    'thumbnail': 'Overviews',
    'children': 'Children',
    'parent': 'Parent metadata',
    'sibling': 'Other resources',
    'onlinesrc': 'Online resources',
    'sources': 'Source datasets',
    'remove': 'Remove',
    'linkADocument': 'A document',
    'linkAMetadata': ' Online resources from an existing record',
    'linkAResource-': 'Link a resource',
    'linkAResource-thumbnail': 'Add an overview to the current metadata',
    'linkAResource-fcats': 'Link a feature catalog to the current metadata',
    'linkAResource-parent': 'Link a parent metadata record to the current metadata',
    'linkAResource-dataset': 'Link a dataset to the current metadata',
    'linkAResource-service': 'Link a service to the current metadata',
    'linkAResource-sibling': 'Link a resource to the current metadata',
    'linkAResource-sources': 'Link a source dataset to the current metadata',
    'linkAResource-onlinesrc': 'Link a online resource to the current metadata',
    'associationType': 'Association type',
    'initiativeType': 'Initiative type',
    'uploadAnImage': 'Upload an image',
    'UploadError': 'Failed to upload file',
    'setAThumbnailByURL': 'Link an image with a URL',
    'setAURL': 'Link a URL',
    'createLink': 'Crear enllaços ...',
    'featureCat': 'Catàleg d\'entitats',
    'serviceMd': 'Metadada de servei',
    'datasetMd': 'Metadata de conjunt de dades',
    'parentMd': 'Metadada pare',
    'updateChildren': 'Actualitzar fills',
    'records': 'registres',
    'record': 'registre',
    'help': 'Ajuda',
    'publishError': 'La publicació ha fallat.',
    'outOfMemoryError': 'Error de falta de memoria.',
    'publishErrorCode': 'Codi d\'error: ',
    'saveAndCheck': 'Salvar i comprovar',
    'saveAndClose': 'Salvar i tancar',
    'cancel': 'Cancel·lar',
    'layout': 'Maquetació',
    'collapseAll': 'Col·lapsar totes les seccions',
    'editAttributes': 'Gestionar attributs',
    'chooseAType': 'Escollir un tipus',
    'chooseAView': 'Escollir una vista',
    'viewMode': 'Mode vista',
    'errorAndStatusMsg': 'Error. Estat: ${status}, text: ${text}. Intenti-ho de nou.',
    'mdEditor': 'Editor de metadades',
    'minorEditTT': 'Do not update timestamp on save',
    'editing': 'Editant ${title} (${uuid})',
    'GetCapabilitiesDocumentError': "Error intentant recuperar la informació del servei (document GetCapabilities) de la URL: ",
    'maxResults': "Número de resultats",
    'mdTitle': "Títol de la metadada",
    'keywords': "Paraules clau",
    'createRelation': "Crear relació",
    'createIfNotExistButton': "Crear una metadada nova",
    'getCapabilitiesLayer': "Capes de GetCapabilities",
    'layerName': "Nom de capa",
    'searching': "Buscant ...",
    'perThesaurus': " per tesaurus",
    'anyThesaurus': "Tots els tesaurus",
    'addFromThesaurus': 'Add from thesaurus ...',
    'selectedKeywords': "Paraules clau seleccionades",
    'foundKeywords': "Paraules clau disponibles",
    'clear': "Esborrar",
    'publish': "Publicar",
    'publishTooltip': "Publicar el conjunt de dades actual al node remot. El conjunt de dades s'actualitzarà en cas que ja sigui present.",
    'publishSuccess': "Publicació realitzada amb èxit.",
    'publishLayerAdded': " Capa afegida a la previsualització del mapa.",
    'unpublish': "Despublicar",
    'unpublishTooltip': "Esborrar l'actual conjunt de dades del node remot.",
    'unpublishSuccess': "Despublicació realitzada amb èxit.",
    'unpublishError': "Error despublicant. ",
    'check': "Comprovar",
    'errorDatasetNotFound': "No s'ha trobat el conjunt de dades.",
    'datasetFound': "S'ha trobat el conjunt de dades i s'ha afegit a la previsualització del mapa ",
    'checkFailure': "Error al comprovar el conjunt de dades en el node remot.",
    'addOnlineSourceTitle': "Enllaçar servei a la metadada",
    'addOnlineSource': "Afegir enllaços",
    'addOnlineSourceTT': "Afegir una secció de tipus onlinesource a la metadada actual per fer l'enllaç als serveis WMS/WFS/WCS. Si el servei és WMS, la capa es pot mostrar al visor de mapes.",
    'statusInformation': "Informació de l'estat.",
    'publishing': "Publicant ...",
    'mapPreview': "Previsualització del mapa",
    'selectANode': "Seleccionar un node ...",
    'geoPublisherWindowTitle': "Geo-publicació: ",
    'keywordSelectionWindowTitle': "Selecció de paraules clau",
    'crsSelectionWindowTitle': "Selecció del sistema de coordenades de referència",
    'linkedMetadataSelectionWindowTitle': "Selecció de la metadada relacionada",
    'NotOwnerError': "No disposa de privilegis per actualitzar el registre relacionat.",
    'ServiceUpdateError': "Error durant l'actualització de la metadada de servei",
    'associateService': "Enllaçar metadades d'un servei",
    'associateDataset': "Enllaçar metadades d'un conjunt de dades",
    'logoSelectionWindow': "Esculli un logo",
    'fileUploadWindow': "Carregar dades o document",
    'selectedCRS': "Sistemes de coordenades seleccionats",
    'foundCRS': "Sistemes de coordenades disponibles",
    'search': "Buscar",
    'restrictSearchToMap': "Restringir cerca a l'extensió del mapa",
    'selected': "seleccionat",
    'selectRegion': "Seleccionar una regió ...",
    'drawRectangle': "Dibuixar un rectangle",
    'drawPolygon': "Dibuixar un polígon",
    'drawPolygonTT': "Clic al botó i després dibuixar un polígon fent clic en el mapa per cada punt. Doble clic per crear l'últim punt del polígon.",
    'drawCircle': 'Dibuixar cercle',
    'discovery': 'Descobriment',
    'visualization': 'Visualització',
    'when': 'Quan ?',
    'anyTime': 'A qualsevol moment',
    'onSelection': 'A la selecció',
    'adminAction': 'Altres',
    'newMetadata': 'Nova metadada',
    'newMetadataTitle': 'Crear una metadada escollint una plantilla i seleccionant un grup',
    'tplTitle': 'Descripció de la plantilla',
    'metadatatype': 'Tipus de recurs',
    'process': 'Processar',
    'suggestions': 'Suggeriments',
    'applySelected': 'Aplicar la tasca seleccionada',
    'processParametersWindow': 'Paràmetres de la tasca',
    'noSuggestion': 'Cap suggeriment.',
    'thumbnailUploadWindow': 'Carrega miniatura',
    'addThumbnail': 'Afegir',
    'createSmall': 'Crear miniatura petita',
    'scalingFactor': 'Factor d\'escala',
    'smallScalingFactor': 'Factor d\'escala',
    'type': 'Tipus de registre',
    'clickToClose': 'Clic per tancar',
    'removeSelected': 'Esborrar els seleccionats',
    'ownerName': 'Propietari de la metadada',
    'setPrivileges': 'Definir privilegis',
    'setCategories': 'Definir categories',
    'massiveOp': 'Operació batch ',
    'prepareDownload': 'Descarregar arxius',
    'mdMenu': 'Accions',
    'deleteRecord': 'Esborrar la metadada ?',
    'deleteConfirm': 'Està segur que vol esborrar aquesta metadada?',
    'deleteRecordSuccess': 'Metadada esborrada.',
    'deleteRecordFailure': 'Error a l\'esborrar la metadada.',
    'advancedSearchOptions': 'Criteris avançats',
    'relatedservices': 'Serveis relacionats',
    'relatedchildren': 'Fills',
    'relatedfcats': 'Catàleg d\'entitats relacionat',
    'relatedhasfeaturecat': 'Conjunt de dades',
    'relatedsources': 'Source datasets',
    'getMEF': 'Exportar (ZIP)',
    'metadataCategories': 'Categories de la metadada',
    'validityInfo': 'Estat de la validació: ',
    'lastUpdate': 'LÚltima actualització : ',
    'importMetadata': 'Importar metadada',
    'validationStatus': 'Estat de la validació',
    'valid': 'Vàlid',
    'notValid': 'No vàlid',
    'notDetermined': 'Indeterminat',
    'addToMap': 'Afegir al mapa: ',
    'map': 'Map',
    'interactiveMap': 'Interactive map',
    'staticMap': 'Static map',
    'downloadLink': 'Descarregar: ',
    'webLink': 'Enllaç Web: ',
    'viewKml': 'Obrir a GoogleEarth: ',
    'layerTree': 'Gestor de capes',
    'mdResultsLayer': 'Resultats de la cerca',
    'printLayer': 'Imprimir pàgina',
    'relatedservices': 'Serveis relacionats',
    'relatedparent': 'Pare',
    'relateddatasets': 'Conjunt de dades relacionades',
    'relatedchildren': 'Fills',
    'relatedrelated': 'Enllaç al catàleg d\'entitats o al conjunt de dades',
    'delete19110Relation': 'Esborra relació amb el catàleg d\'entitats',
    'newWindow': 'Nova finestra',
    'addAsXLink': 'Afegir un element enllaçat',
    'contactSelectionWindowTitle': 'Selecció dels contactes',
    'selectedContacts': 'Contactes seleccionats',
    'foundContacts': 'Disponible',
    'contactRole': 'Rol del contacte',
    'mapNearYou': 'Centrar el mapa a la seva localització',
    'errorChangeProtocol': 'Esborrar el fitxer carregat abans de canviar el protocol d\'un recurs online.',
    'resultBy': ' resultat(s) / ',
    'subTemplateImport': 'Importar un element al directori',
    'xmlData': 'XML',
    'minorEdit': 'Modificació menor',
    'minorEditTT': '',
    
    'facetMore': '+ Show more',
    'facetLess': '- Show less',
    
    'extractorTitle': 'Download data from ',
    'defineExtractionArea': 'Define extraction area',
    'chooseALayer': 'Choose a layer',
    'outputFormat': 'Output format',
    'dataDownload': "Download data",
    'wfsVersion': 'Service version',
    'wxs-extract-service-not-found': 'Error connecting to the service ${url}. ${misc}.',
    'wxs-extract-layer-not-found': 'Layer ${layer} not found in WFS (${url}).',
    'GML2': 'GML 2',
    'GML3': 'GML 3',
    'CSV': 'Text CSV',
    'SHAPE-ZIP': 'ESRI Shapefile',
    
    // Shortcuts
    'runASearch': 'Executar una cerca.',
    'focusOnAny': 'Moure el cursor al camp de cerca de text.',
    'hideSearchForm': 'Amagar o mostrar el formulari de cerca.',
    'switchMode': 'Canviar el mode de visualització.',
    'resetSearchForm': 'Reinicialitzar el formulari de cerca.',
    'focusOnLogin': 'Col·locar el cursor sobre el formulari de connexió o desconnexió si esteu connectats.',
    'openAdmin': 'Administrar el catàleg',
    'displayInfoPanel': 'Mostrar el panell d\'informació.',
    'displayHelpPanel': 'Mostrar aquesta ajuda.',
    
    'SelectionWindowTitle': "Seleccionar del directori",
    'found': 'Registres trobats',
    'selected': 'Seleccionat',

    'create': 'Crear',

    // Feedback
    'feedbackcontactDetails' : 'les dades de contacte',
    'feedbacknameInitials' : 'Nom, Inicial (s)',
    'feedbackmale' : 'masculí',
    'feedbackfemale' : 'femení',
    'feedbackposition' : 'funció',
    'feedbackorganization' : 'Organització',
    'feedbackphone' : 'telèfon',
    'feedbackemail' : 'E-mail',
    'feedbackfeedback': 'realimentació',
    'feedbackfunction': 'funció',
    'feedbackquestion': 'Qüestió',
    'feedbackerror' : 'Error',
    'feedbackremark' : 'observació',
    'feedbackcontact' : 'contacte',
    'feedbackcategory' : 'categoria',
    'feedbackmetadataContent' : 'Contingut de Metadades',
    'feedbackdataContent' : 'contingut de les dades',
    'feedbackserviceContent' : 'contingut dels serveis',
    'feedbacksupport' : 'Suport',
    'feedbackmapViewer' : 'Map Viewer',
    'feedbacksearch' : 'Cercar',
    'feedbackorganizations' : 'Organitzacions',
    'feedbackcontentManagement' : 'Content Management',
    'feedbackmetadataImport' : 'Importació de Metadades',
    'feedbackmetadataEdit'  :'edició de metadades',
    'feedbackharvesting' : 'collita',
    'feedbackvalidator' : 'Validator',
    'feedbackother' : 'Si no és així',
    'feedbackremarks' : 'notes',
    'feedbackmetadataData' : 'Metadades informació',
    'feedbacktitle' : 'Títol',
    'feedbackPanelTitle' : 'Amb aquest formulari pot donar la seva opinió sobre metadades, dades i / o serveis.',
    'feedbacksubmit' : 'Enviar',
    'feedbackerrorTitle' : 'precaució',
    'feedbackerrorMsg' : 'No s\'ha pogut durant l\'enviament. Torneu-ho a provar més tard.',
    'feedbackcancel' : 'Cancel',
    'feedbackWindowTitle' : 'realimentació',

    // Suggestion processing
    'add-extent-from-geokeywordsreplace': 'Reemplaçar l\'extensió existent',
    'add-info-from-wmssetExtent': 'Definir l\'extensió',
    'add-info-from-wmssetAndReplaceExtent': 'Reemplaçar l\'extensió existent',
    'add-info-from-wmssetCRS': 'Indicar el sistema de coordenades de referència',
    'add-info-from-wmssetDynamicGraphicOverview': 'Definir la vista predefinida (usant la URL de la petició GetMap)',
    'add-info-from-wmswmsServiceUrl': 'URL del servei',
    'linked-data-checkerlinkUrl': 'URL a suprimir',
    'related-metadata-checkeruuidToRemove': 'Identificador a esborrar',
    'add-service-info-from-wxssetAndReplaceOperations': 'Reemplaçar operacions existents',
    'add-service-info-from-wxswxsServiceUrl': 'URL de servei',
    
    // Admin
    'manageDirectories': 'Gestionar directoris',
    'directory': 'Directori',
    'thesaurusManager': 'Gestor de tesaurus',
    'Theme': 'Tema',
    'thesaurusFilePath': 'Arxiu de tesaurus (.rdf)',
    'ThesaurusTitle': 'Nom de tesaurus',
    'ThesaurusId': 'Thesaurus identifier',
    'ThesaurusNs': 'Thesaurus namespace',
    'createThesaurusFromURL': 'a partir d\'una URL',
    'createThesaurusFromRepository': 'a partir d\'un repositori',
    'creationMode': 'Crear',
    'thesaurusFromRepository': 'Tesaurus',
    'externalThesaurusURL': 'URL',
    'thesaurusCreation': 'Add a thesaurus',
    'Type': 'Tipus',
    'Activated': 'Activat',
    'emptyThesaurus': 'Nou tesaurus buit',
    'thesaurusFromFile': 'A partir d\'un arxiu local',
    'thesaurusFromURL': 'A partir d\'un arxiu remot (URL)',
    'id': 'Identificador',
    'mdIdentifier': 'Record internal identifier: ',
    'mdUUID': 'Record unique identifier: ',
    'label': 'Etiqueta',
    'definition': '-',
    'xmin': 'X min',
    'ymin': 'Y min',
    'xmax': 'X max',
    'ymax': 'Y max',
    'newLabel': 'Etiqueta',
    'newDefinition': 'Definició',
    'selDirectoryTT': 'Seleccioni un tipus de directori. Un directori agrupa tots els elements que tenen la mateixa arrel (per exemple. gmd:CI_ResponsibleParty és un directori de contactes)',
    'privTplElTT': 'Gestionar els privilegis de la selecció actual.',
    'addTplElTT': 'Afegir un element a partir d\'un fragment d\'XML. El directori destí es basa en l\'element arrel (per exemple. gmd:CI_ResponsibleParty).',
    'copyTplElTT': 'Crear un nou element en el directori a partir de l\'element seleccionat.',
    'delTplElTT': 'Esborrar la selecció del directori.',
    'language': 'Idioma',
    'to-iso19139-keyword': 'Text mode',
    'to-iso19139-keyword-as-xlink': 'Linked mode',
    'to-iso19139-keyword-with-anchor': 'Anchor mode',
    
    'linklabel-application/vnd.ogc.wms_xml': 'Add to map',
    'linklabel-application/vnd.ogc.wmc': 'Interactive map',
    'linklabel-OGC:WMC-1.1.0-http-get-capabilities': 'Download Web Map Context',
    'linklabel-application/pdf': 'PDF',
    'linklabel-OGC:WMS': 'Add to map',
    'linklabel-application/vnd.google-earth.kml+xml': 'View in Google Earth',
    'linklabel-application/zip': 'Download',
    'linklabel-application/octet-stream': 'Download',
    'linklabel-WWW:DOWNLOAD-1.0-http--download': 'Download',
    'linklabel-application/x-compressed': 'Download',
    'linklabel-text/html': 'Web link',
    'linklabel-text/plain': 'Web link',
    'linklabel-image/png': 'Image link',
    'linklabel-image/jpeg': 'Image link',
    'linklabel-': 'Link',
    
    //tabbed search
    'Home': "Pàgina d'inici",
    'Map': "Mapa",
    'Poweredby': "Creat per",
    'About': "Sobre",
    'org': "Organització",
    'keyword': "paraula clau",
    'when': "quan",
    'advancedSearchOptions': "Opcions de cerca avançades",
    'hitsPerPage': "Resultats per pàgina",
    'Searchforspatialdataon': "Buscar les dades espacials sobre",
    'search': "cerca",
    'fullTextSearch': "Cerca per text complet",
    'reset': "reinicialitzar",
    'resetSearchForm': "Reinicialitzar el formulari de cerca",
    'Advanced': "Avançat",
    'newWindow': "Nova finestra",
    'mdEditor': "Editor de metadades",
    'List': "Llista",
    'insertMode': 'Insert Mode',
    'fileUpload': 'File upload',
    'copyPaste': 'Copy/Paste',
    'fileType': 'File Type',
    'singleFile' :'Single File (XML, SLD, WMC...)',
    'mefFile': 'MEF file',
    'importActions': 'Import actions',
    'noActionOnImport': 'No action on import',
    'overwriteMD': 'Overwrite metadata with same UUID' ,
    'generateUuid': 'Generate UUID for inserted metadata',
    'styleSheet': 'StyleSheet',
    'validate': 'Validate',
    'assignCurCat': 'Assign to current catalog',
    'metadata': 'Metadata',
    'mdInsertResults': 'Results of metadata import',
    'mdInsertSuccess': 'Metadata inserted with',
    'mdInsertFailure': 'Error while inserting metadata : ',
    'mdRecordsProcessed': 'Total number of metadata records processed',
    'mdRecordsAdded': 'Total number of metadata records added',
    'chooseCategory': 'Choose a category'
};

OpenLayers.Util.extend(OpenLayers.Lang.ca,GeoNetwork.Lang.ca);