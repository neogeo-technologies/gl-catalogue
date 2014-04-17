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

GeoNetwork.Lang.es = {
    'metadataRecordPublishedTitle': 'Metadata publication',
    'metadataRecordPublished': '${title} is now visible to everyone.',
    'metadataRecordUnPublished': '${title} is not published to everyone anymore.',
    'metadata-not-found': 'Metadata with UUID ${uuid} not found or not shared with you.',
    'updateUserInfo': 'Edit my profile',
    'filterGroup': 'Filter group ...',
    'checkAllOrNone': 'Check all/none',
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
    'dateType': 'Tipo de fecha',
    'creationDate': 'Fecha de creación',
    'modificationDate': 'Fecha de modificación',
    'publicationDate': 'Fecha de publicación',
    'previousPage':'Volver a la página anterior',
    'nextPage':'Ir a la página siguiente',
    'upInPage':'Desplazarse hacia arriba en los resultados',
    'downInPage':'Desplácese hacia abajo en los resultados',
    'example':'Ejemplo',
    'helper':'Propuesta',
    'toggleLayerManager':'Mostrar gestor de capas del mapa',
    'tagName':'Nombre del elemento',
    'enableTooltip':'Habilitar información sobre las herramientas para obtener información adicional.',
    'connectIssue':'Problema en la conexión con el catálogo',
    'connectIssueMsg':'Error 404. No se puede conectar con el catálogo de la URL',
    'featureInfoTooltipTitle':'Propiedades de los objetos',
    'featureInfoTooltipText':'Haga clic en el mapa para obtener información de todas las capas visibles en la actualidad de los datos a la consulta.',
    'zoomToMaxExtentTooltipTitle':'Extensión total',
    'zoomToMaxExtentTooltipText':'Utilice esta tecla para toda la extensión del mapa para ampliarlo.',
    'zoominTooltipTitle':'Acercar',
    'zoominTooltipText':'Arrastre un rectángulo en el mapa el mapa para acercar a esa zona. Un simple clic amplía la zona en un factor de 2',
    'zoomoutTooltipTitle':'Reducir',
    'zoomoutTooltipText':'Arrastre un rectángulo en el mapa el mapa para alejar a esta área.',
    'dragTooltipTitle':'Mover el mapa',
    'dragTooltipText':'Mover el mapa con el botón izquierdo del ratón.',
    'previousTooltipTitle':'Vista previa',
    'previosTooltipText':'Haga clic en este botón para volver a la vista anterior del mapa.',
    'nextTooltipTitle':'Vista siguiente',
    'nextTooltipText':'Haga clic en el botón para ver la vista siguiente del mapa.',
    'featureInfoTitle':'Propiedades de los objetos',
    'layerManagerTabTitle':'Gestionar las capas de datos',
    'legendTabTitle':'Leyenda',
    'scaleTitle':'Escala',
    'xTitle':'X',
    'yTitle':'Y',
    'projectionTitle':'Proyección',
    'FeatureInfoNotQueryable':'No hay datos disponibles de la capas consultables',
    'WMSBrowserTab1':'Seleccionar',
    'WMSBrowserTab3':'Externo',
    'WMSBrowserPreviewTitle':'Vista previa de datos de capa',
    'WMSBrowserAddButton':'Añadir',
    'WMSBrowserDuplicateMsg':'La capa que ya existe en el mapa',
    'WMSBrowserPreviewWaitMsg':'Previsualizando imagen previa',
    'WMSBrowserConnectButton':'Conectar',
    'WMSBrowserConnectError':'Error al conectar con el servicio de mapas web, por favor verifique el URL.',
    'infoTitle':'Información',
    'mf.print.mapTitle':'Título',
    'mf.print.comment':'Comentario',
    'mf.print.dpi':'Resolución',
    'mf.print.scale':'Escala',
    'mf.print.rotation':'Ángulo',
    'mf.print.resetPos':'Limpiar',
    'mf.print.print':'Imprimir',
    'mf.print.generatingPDF':'Creando PDF',
    'mf.print.unableToPrint':'No se pudo imprimir, por favor inténtelo más tarde',
    'mf.error':'Error',
    'selectExtentTooltipTitle':'Seleccionar extensión del mapa',
    'selectExtentTooltipText':'Seleccionar la extensión del mapa para las búsquedas en el catálogo',
    'printTooltipTitle':'Imprimir',
    'printTooltipText':'Imprimir mapa actual',
    'savewmcTooltipTitle':'Guardar el contexto de mapa web',
    'savewmcTooltipText':'Guardar el contexto de mapa web en un archivo.',
    'saveWMCFile.windowTitle':'Guardar el contexto de mapa web',
    'saveWMCFile.errorSaveWMC':'No se pudo guardar el contexto de mapa web',
    'loadwmcTooltipTitle':'Carga el contexto de mapa web',
    'loadwmcTooltipText':'Carga el contexto de mapa web desde un archivo en el mapa actual.',
    'selectWMCFile.windowTitle':'Contexto de mapa web',
    'selectWMCFile':'Seleccionar archivo de contexto de mapa web ',
    'selectWMCFile.waitLoadingWMC':'Web Map Context Laden',
    'selectWMCFile.loadButtonText':'Tienda',
    'selectWMCFile.mergeButtonText':'Resumir',
    'selectWMCFile.errorLoadingWMC':'Web Map Context no se pudo cargar',
    'opacityButtonText':'Opacidad',
    'opacityWindowTitle':'Opacidad',
    'metadataButtonText':'Metadatos',
    'removeButtonText':'Quitar',
    'addWMSButtonText':'Añadir WMS',
    'addWMSWindowTitle':'Añadir WMS',
    'layerInfoPanel.windowTitle ':'Los datos de metadatos capa de',
    'layerInfoPanel.titleField ':'Título',
    'layerInfoPanel.descriptionField ':'Descripción',
    'layerInfoPanel.queryableField ':'Interrogable',
    'layerList ':'Datos de la lista de capas',
    'baseLayerList':'Las capas de datos básicos',
    'metadataResults.buttonText ':'Resultados de metadatos',
    'metadataResults.tooltipTitle ':'Resultados de metadatos',
    'metadataResults.tooltipText ':'Ir a la página de resultados de los metadatos',
    'metadataResults.alertTitle ':'Resultados de metadatos',
    'metadataResults.alertText ':'No hay resultados disponibles de metadatos',
    'featureInfoWindow.windowTitle':'Propiedades de los objetos',
    'mf.information':'Imprimir',
    'mf.print.pdfReady':'PDF disponible',
    'loadLayer.loadingMessage':'Datos de la capa de carga',
    'loadLayer.error.title':'La capa de datos de carga de error',
    'loadLayer.error.message':'La capa de datos no se pudo cargar',
    'disclaimer.windowTitle':'Negativa',
    'disclaimer.loading':'Rechazo de carga ...',
    'disclaimer.buttonClose':'Cerrar',
    'gazetteerAddressField1Label':'Código postal',
    'gazetteerAddressField2Label':'Carretera',
    'gazetteerAddressField3Label':'Lugar',
    'gazetteerAddressField4Label':'Comunidad',
    'gazetteerAddressField5Label':'Número de la casa',
    'searchOptionButton':'Buscar',
    'GazetteerWindowTitle':'La dirección',
    'searchResults':'Resultados de la búsqueda',
    'errorTitle':'Error',
    'SearchOptionLoadFailureMsg':'No hay resultados disponibles. \n Servicio de puede no estar disponible . \n',
    'gazetteerTooltipTitle':'Búsqueda de dirección',
    'gazetteerTooltipText':'Código Postal Nombre de la calle local municipal o de búsqueda de empleo.',
    'SearchOptionNoResults':'No se encontraron resultados',
    'zoomlayerTooltipTitle':'Ver extensión de la capa',
    'zoomlayerTooltipText':'Utilice esta tecla para ver toda la extensión de la capa de datos seleccionada.',
    'zoomlayer.selectLayerTitle':'Ver extensión de la capa',
    'zoomlayer.selectLayerText':'Ninguna capa seleccionada',
    'layerStylesWindowTitle':'Datos de estilo de capa',
    'layerStylesPreviewTitle':'Leyenda Prevista',
    'selectStyleButton':'Elegir el estilo',
    'WMSTimeWindowTitle':'WMS Temporal',
    'WMSTimePositionTitle':'Seleccione una fecha',
    'WMSTimeMovieTitle':'Ver animación',
    'wmsTimeUpdateButtonText':'Aplicar',
    'WMSTimeAnimationCheckbox':'Reproducir la película con los últimos $ {} veces los pasos',
    'fullTextSearch':'Búsqueda de texto completo',
    'keyword':'Palabra clave',
    'org':'Organización',
    'altTitle': 'Título alternativo',
    'mapTypes':'Tipos de mapas',
    'rsIdentifier':'Identificador de recursos',
    'inspireSearchOptions':'INSPIRE criterios',
    'inspireannex':'Anexo INSPIRE',
    'inspirerelated':'En cuanto a INSPIRE',
    'inspirerelatedtt':'INSPIRE informe sobre el historial de cumplimiento con respecto a la especificación de datos',
    'inspiretheme':'Tema INSPIRE',
    'inspireClassificationDataServices':'INSPIRE servicios de datos de clasificación',
    'serviceType':'Tipo de servicio',
    'serviceType_discovery':'Servicio de Descubrimiento (Discovery)',
    'serviceType_download': 'Download Service (download)',
    'serviceType_view':'Servicio de visualización (ver)',
    'serviceType_transformation':'Servicio de Transformación (transformación)',
    'serviceType_invoke':' Servicio de invocación de datos espaciales (llamada)',
    'serviceType_other':'Otros Servicios (otros)',
    'similarity':'Buscar la precisión',
    'wkt':'WKT la geometría',
    'simpleViewMode':'Ver Mensaje Individual',
    'spatialSearch':'Criterios espaciales',
    'mdChangeDate':'Fecha de cambio de metadatos',
    'tempExtent':'Medida temporal',
    'hitsPerPage':'Resultados por página',
    'sortBy':'Ordenar por',
    'relevance':'Relevantes',
    'options':'Opciones',
    'title':'Título',
    'changeDate':'Cambio de Fecha',
    'rating':'Valoración',
    'popularity':'Popularidad',
    'scaleDesc':'Escala (de)',
    'scaleAsc':'Escala (ASC)',
    'abstract':'Resumen',
    'catalogue':'Catálogo',
    'group':'Grupo',
    'chooseGroup':'Seleccione un grupo de',
    'md':'Metadatos',
    'tpl':'Plantilla',
    'category':'Categoría',
    'advTextSearch':'Opciones avanzadas de búsqueda',
    'eitherWords':'Cualquiera de las palabras',
    'exactPhrase':'Frase exacta',
    'allWords':'Todas las palabras',
    'withoutWords':'Sin las palabras',
    'precise':'Preciso',
    'imprecise':'Incorrecto',
    'relationType':'Relación',
    'within':'Dentro de',
    'touches':'Toque',
    'crosses':'Cruza',
    'fullyOutsideOf':'Completamente fuera de',
    'encloses':'Encierra',
    'overlaps':'Superposición',
    'intersection':'Intersección',
    'nearYou':'En su área',
    'from':'De',
    'to':'A',
    'scaleNominator':'A',
    'scale':'Escala',
    'digital':'Digital',
    'hardCopy':'Hardcopy',
    'download':'Descargar',
    'downloadable':'Descargar',
    'interactive':'Interactivo',
    'resourceType':'Tipo de recurso',
    'dataset':'Conjunto de datos',
    'series':'Serie',
    'service':'Servicio',
    'spatialRepType':'La representación espacial',
    'video':'Vídeo',
    'vector':'Vector',
    'textTable':'Texto de la tabla',
    'tin':'Estado',
    'stereoModel':'Modelo de estéreo',
    'grid':'Red',
    'kind':'Tipo',
    'enterGetCapURL':'Introduzca una dirección URL para registrarse GetCapabilities a un nuevo servicio.',
    'edit':'Editar',
    'duplicate':'Duplicado',
    'delete':'Borrar',
    'createChild':'Crear infantil',
    'privileges':'Privilegios',
    'categories':'Categorías',
    'otherActions':'Otras acciones',
    'view':'Ver',
    'zoomTo':'Ampliar',
    'saveXml':'Guardar como XML',
    'exportCsv':'Exportar (CSV)',
    'exportZip':'Exportar (ZIP)',
    'printSel':'Exportar (PDF)',
    'printTT':'Imprimir. Abra una nueva página para la impresión.',
    'newOwner':'El nuevo propietario',
    'updateCategories':'Actualiza Categorías',
    'updatePrivileges':'Actualización de los privilegios',
    'noneSelected':'Ninguna seleccionada',
    'none':'ninguno',
    'all':'todo',
    'allInPage':'todos en la página',
    'select':'Seleccionar',
    'username':'Nombre de usuario',
    'password':'Contraseña',
    'login':'Iniciar sesión',
    'logout':'Cerrar sesión',
    'administration':'Administración',
    'validationReport':'Informe de validación',
    'status':'Estado',
    'updateStatus': 'Update status',
    'currentStatus': ' (current status is ${status})',
    'enableWorkflow': 'Enable workflow',
    'enableWorkflowTT': 'Set metadata status to draft and enable workflow',
    'enableWorkflowStart': 'Metadata status set to draft.',
    'addLayerSelection': 'Add layers of selection to the map',
    'items':'Artículo',
    'item':'Artículo',
    'thumbnails':'Miniaturas',
    'noimages':'No hay imágenes disponibles',
    'add':'Añadir',
    'small':'Pequeño',
    'large':'Grande',
    'selectImage':'Seleccione una imagen',
    'selectFile':'Seleccione un archivo',
    'image':'Imagen',
    'uploading':'Subiendo ...',
    'upload':'Subir',
    'success':'Éxito',
    'failure':'Fracaso',
    'error':'Error',
    'save':'Ahorrar',
    'reset':'Espalda',
    'fileProcessedMsg':'File ${res} procesado en el servidor.',
    'suggestion':'Propuesta',
    'logoSelect':'Seleccione un logotipo',
    'relatedResources':'Recursos relacionados',
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
    'createLink':'Creación de vínculos ...',
    'featureCat':'Reportaje Catálogo',
    'serviceMd':'Servicio de metadatos',
    'datasetMd':'Conjunto de datos de metadatos',
    'parentMd':'Padres de metadatos',
    'updateChildren':'Actualizar hijo',
    'records':'Archivos',
    'record':'Registro',
    'help':'Ayuda',
    'publishError':'La publicación falló.',
    'outOfMemoryError':'Error de memoria.',
    'publishErrorCode':'Código de error',
    'saveAndCheck':'Guardar y revisar',
    'saveAndClose':'Guardar y cerrar',
    'cancel':'Cancelar',
    'layout':'Disposición',
    'collapseAll':'Ocultar todas las secciones',
    'editAttributes':'Atributos de Gestión de',
    'chooseAType':'Seleccione un tipo de',
    'chooseAView':'Seleccione una vista',
    'viewMode':'Modo de visualización',
    'errorAndStatusMsg':'Errores. Estado $ {texto}. Intñentelo de nuevo.,',
    'mdEditor':'El Editor de Metadatos',
    'minorEditTT':'No marca de tiempo de actualización en Guardar',
    'editing':'Edición de ${title} (${uuid})',
    'GetCapabilitiesDocumentError':'Error al cargar documento GetCapabilities del servicio de la URL',
    'maxResults':'Número de resultados',
    'mdTitle':'Metadatos Título',
    'keywords':'Palabras clave',
    'createRelation':'Crear la relación',
    'createIfNotExistButton':'Crear un nuevo conjunto de metadatos',
    'getCapabilitiesLayer':'Capa GetCapabilities',
    'layerName':'Nombre de la capa',
    'searching':'Buscar ...',
    'perThesaurus':'Por Tesauro',
    'anyThesaurus':'Cualquier Tesauro',
    'addFromThesaurus': 'Add from thesaurus ...',
    'selectedKeywords':'Palabras clave seleccionadas',
    'foundKeywords':'Palabras clave disponibles',
    'clear':'Borrar',
    'publish':'Publicar',
    'publishTooltip':'Publicar los datos actuales de inventario para el nodo remoto. Si los datos ya está publicada en este nodo se actualiza.',
    'publishSuccess':'El éxito de la publicación.',
    'publishLayerAdded':'Capas añadido para asignar sólo una vista previa.',
    'unpublish':'No Publicar',
    'unpublishTooltip':'Eliminar el registro actual del nodo remoto.',
    'unpublishSuccess':'Éxito en la despublicación.',
    'unpublishError':'Fallo en la despublicación.',
    'check':'Comprobar',
    'errorDatasetNotFound':'Anote que no se encuentra.',
    'datasetFound':'Conjunto de datos encontrados se ha agregado a la vista previa del mapa.',
    'checkFailure':'Fallo al revisar el conjunto de datos en el nodo remoto.',
    'addOnlineSourceTitle':'Enlace de servicio para los metadatos',
    'addOnlineSource':'Añadir enlaces',
    'addOnlineSourceTT':'Agregar una fuente de la sección en línea de registro de metadatos actual que en los servicios WMS / WFS / WCS. Si el servicio es una capa WMS se puede mostrar en el Visualizador de Mapas.',
    'statusInformation':'Información de estado.',
    'publishing':'Publicando ...',
    'mapPreview':'Mapa de vista previa',
    'selectANode':'Seleccione un nodo ...',
    'geoPublisherWindowTitle':'Geo-publicación',
    'keywordSelectionWindowTitle':'Selección de palabras clave',
    'crsSelectionWindowTitle':'Coordinar la selección de referencia del sistema',
    'linkedMetadataSelectionWindowTitle':'Selección de los metadatos relacionados',
    'NotOwnerError':'Usted no tiene permiso para actualizar el registro relacionado.',
    'ServiceUpdateError':'Error en la actualización de los metadatos de servicio',
    'associateService':'Enlace de metadatos de servicio',
    'associateDataset':'Enlace registro de metadatos',
    'logoSelectionWindow':'Seleccione un logotipo',
    'fileUploadWindow':'Carga de datos o documentos',
    'selectedCRS':'Selección de los sistemas de coordenadas',
    'foundCRS':'Disponibles sistemas de coordenadas',
    'search':'Buscar',
    'restrictSearchToMap':'Limitar el alcance de la búsqueda para reflexionar',
    'selected':'seleccionado',
    'selectRegion':'Elige una región ...',
    'drawRectangle':'Dibuja un rectángulo',
    'drawPolygon':'Dibuja un polígono',
    'drawPolygonTT':'Haga clic en el botón y dibujar un polígono haciendo clic en el mapa para cada punto. Haga doble clic en el último punto del polígono para hacer.',
    'drawCircle':'Dibuja un círculo',
    'discovery':'Descubrimiento',
    'visualization':'Visualización',
    'when':'¿Cuándo?',
    'anyTime':'Cada vez',
    'onSelection':'Después de la selección',
    'adminAction':'Otro',
    'newMetadata':'Metadatos Nuevo',
    'chooseTemplate':'Seleccione una plantilla',
    'process':'Proceso',
    'suggestions':'Propuestas',
    'applySelected':'Introduzca tarea seleccionada',
    'processParametersWindow':'Parámetros de la tarea',
    'noSuggestion':'Ninguna propuesta.',
    'thumbnailUploadWindow':'Miniatura de la foto',
    'addThumbnail':'Añadir',
    'createSmall':'Vista previa pequeña Nueva',
    'scalingFactor':'Factor de escala',
    'smallScalingFactor':'Factor de escala pequeña',
    'type':'Tipo de registro',
    'clickToClose':'Haga clic para cerrar',
    'removeSelected':'Eliminar la selección',
    'ownerName':'Propietario del registro de metadatos',
    'setPrivileges':'Establecer privilegios',
    'setBatchPrivileges': 'Overwrite privileges of selected records',
    'setCategories':'Establecer categorías',
    'massiveOp':'Modo por lotes',
    'prepareDownload':'Descarga de archivos',
    'mdMenu':'Acciones',
    'deleteRecord':'Eliminar los metadatos?',
    'deleteConfirm':'¿Estás seguro de eliminar este registro de metadatos?',
    'deleteRecordSuccess':'Los metadatos borrados.',
    'deleteRecordFailure':'Error al eliminar los metadatos.',
    'advancedSearchOptions':'Criterios avanzados',
    'relatedservices':'Servicios relacionados con',
    'relatedsource': 'Source datasets',
    'relatedhassource': 'Is used in',
    'relatedchildren':'Hijos',
    'relatedsibling': 'Related records',
    'relatedassociated': 'Related records',
    'relatedfcats':'Catálogo de Funciones Relacionadas',
    'relatedhasfeaturecat':'Conjuntos de datos',
    'relatedsources':'Registros de origen',
    'getMEF':'Exportaciones (ZIP)',
    'metadataCategories':'El meta-categorías',
    'validityInfo':'Estado de la validación',
    'lastUpdate':'Última actualización',
    'importMetadata':'Importar metadatos',
    'validationStatus':'Estado de la validación',
    'valid':'Válido',
    'notValid':'No es válido',
    'notDetermined':'No se ha determinado',
    'addToMap':'Añadir al mapa',
    'map': 'Map',
    'interactiveMap': 'Interactive map',
    'staticMap': 'Static map',
    'downloadLink':'Descargar',
    'webLink':'Weblink',
    'viewKml':'Abrir en Google Earth',
    'layerTree':'Gestor de capas',
    'mdResultsLayer':'Resultados de la búsqueda',
    'printLayer':'Imprimir esta página',
    'relatedservices':'Servicios relacionados con',
    'relatedparent':'Padre',
		'relatedsibling': 'Related records',
    'relateddatasets':'Registros similares',
    'relatedchildren':'Hijos',
    'relatedrelated':'Característica catalog / enlace de datos',
    'delete19110Relation':'Retire relación del catálogo de rasgos',
    'newWindow':'Nueva ventana',
    'addAsXLink':'Añadir un elemento vinculado',
    'contactSelectionWindowTitle':'Seleccionar contacto',
    'selectedContacts':'Contactos seleccionados',
    'foundContacts':'Disponible',
    'contactRole':'Rol de contacto',
    'mapNearYou':'Centrar mapa en su ubicación',
    'errorChangeProtocol':'Elimine el fichero cargado  antes de cambiar el protocolo de un recurso en línea.',
    'resultBy':'Resultado (s) /',
    'subTemplateImport':'Importación de entradas de directorio',
    'xmlData':'XML',
    'minorEdit':'Correcciones menores',
    'minorEditTT':'',

    // Shortcuts
    'runASearch':'Haga una búsqueda.',
    'focusOnAny':'Mover el enfoque al campo de búsqueda de texto completo.',
    'hideSearchForm':'Mostrar u ocultar el formulario de búsqueda.',
    'switchMode':'Activar el modo de visualización.',
    'resetSearchForm':'Restablecer el formulario de búsqueda.',
    'focusOnLogin':'Centrarse en el acceso al formulario de acceso para administrar catálogo de la sesión o una cuenta',
    'openAdmin':'Ir a administración',
    'displayInfoPanel':'Muestra el panel de información.',
    'displayHelpPanel':'Muestra la ayuda.',

    'SelectionWindowTitle':'Elija de la lista',
    'found':'Registros encontrados',
    'selected':'Seleccionado',

    'create':'Crear',

    // Feedback
    'feedbackcontactDetails' : 'Los datos de contacto',
    'feedbacknameInitials' : 'Nombre, Inicial (s)',
    'feedbackmale' : 'Masculino',
    'feedbackfemale' : 'Femenino',
    'feedbackposition' : 'Posición',
    'feedbackorganization' : 'Organización',
    'feedbackphone' : 'Teléfono',
    'feedbackemail' : 'Email',
    'feedbackfeedback': 'Reacción',
    'feedbackfunction': 'Función',
    'feedbackquestion': 'Cuestión',
    'feedbackerror' : 'Error',
    'feedbackremark' : 'Observación',
    'feedbackcontact' : 'Contacto',
    'feedbackcategory' : 'Categoría',
    'feedbackmetadataContent' : 'Contenido de metadatos',
    'feedbackdataContent' : 'Contenido de dados',
    'feedbackserviceContent' : 'Contenido de servicios',
    'feedbacksupport' : 'Apoyo',
    'feedbackmapViewer' : 'Map Viewer',
    'feedbacksearch' : 'Buscar',
    'feedbackorganizations' : 'Organizaciones',
    'feedbackcontentManagement' : 'Content Management',
    'feedbackmetadataImport' : 'Importación de metadatos',
    'feedbackmetadataEdit'  :'Edición de metadatos',
    'feedbackharvesting' : 'Cosecha',
    'feedbackvalidator' : 'Validator',
    'feedbackother' : 'De otra manera',
    'feedbackremarks' : 'Notas',
    'feedbackmetadataData' : 'Metadatos información',
    'feedbacktitle' : 'Título',
    'feedbackPanelTitle' : 'Con este formulario puede dar su opinión sobre metadatos, datos y / o servicios.',
    'feedbacksubmit' : 'Enviar',
    'feedbackerrorTitle' : 'Precaución',
    'feedbackerrorMsg' : 'Se produjo un error durante el envío. Por favor, inténtelo de nuevo más tarde.',
    'feedbackcancel' : 'Cancelar',
    'feedbackWindowTitle' : 'Reacción',

    // Suggestion processing
    'add-extent-from-geokeywordsreplace':'Reemplazar la extensión existente',
    'add-info-from-wmssetExtent':'Establecer extensión',
    'add-info-from-wmssetAndReplaceExtent':'Reemplazar la extensión existente',
    'add-info-from-wmssetCRS':'Establecer sistema de coordenadas de referencia',
    'add-info-from-wmssetDynamicGraphicOverview':'Establecer gráfico (usando la URL de la petición GetMap )',
    'add-info-from-wmswmsServiceUrl':'Servicio de URL',
    'linked-data-checkerlinkUrl':'Eliminar URL',
    'related-metadata-checkeruuidToRemove':'Retire los identificadores',
    'add-service-info-from-wxssetAndReplaceOperations':'Reemplazar las operaciones existentes',
    'add-service-info-from-wxswxsServiceUrl':'Servicio de URL',

    // Admin
    'manageDirectories ':'Gestión de Directorios',
    'directory':'Directorio',
    'thesaurusManager':'Gestión de Tesauro',
    'Theme':'Tema',
    'thesaurusFilePath':'Archivo de tesauro (. RDF)',
    'ThesaurusTitle':'Nombre de tesauro',
    'ThesaurusId': 'Thesaurus identifier',
    'ThesaurusNs': 'Thesaurus namespace',
    'createThesaurusFromURL':'desde URL',
    'createThesaurusFromRepository':'desde repositorio de tesauro',
    'creationMode':'Crear',
    'thesaurusFromRepository':'Tesauro',
    'externalThesaurusURL':'URL',
    'thesaurusCreation':'Añadir un Tesauro',
    'Type':'Tipo',
    'Activated':'Habilitado',
    'emptyThesaurus':'Nuevo tesauro vacío',
    'thesaurusFromFile':'Desde el archivo local',
    'thesaurusFromURL':'Archivo remoto (URL)',
    'id':'Identificador',
    'mdIdentifier': 'Record internal identifier: ',
    'mdUUID': 'Record unique identifier: ',
    'label':'Etiqueta',
    'definition':'-',
    'xmin':'X min',
    'ymin':'Y min',
    'xmax':'X max',
    'ymax':'Y max',
    'newLabel':'Etiqueta',
    'newDefinition':'Definición',
    'selDirectoryTT':'Seleccione un directorio. Un grupo de Directorio de todos los elementos que tienen el nombre de la raíz mismo elemento (por ejemplo, GMD',
    'privTplElTT':'Administración de permisos para la selección actual.',
    'addTplElTT':'Añadir un elemento de un fragmento de XML en un directorio. El directorio de destino es el nombre del elemento raíz (por ejemplo, basada en GMD',
    'copyTplElTT':'Crear una nueva entrada en el directorio de la selección actual.',
    'delTplElTT':'Eliminar elemento seleccionado en la guía telefónica.',

    'Home':'Inicio',
    'Map':'Mapa',
    'Poweredby':'Proporcionado por',
    'About':'Acerca de',
    'org':'Organización',
    'keyword':'Palabra clave',
    'When':'Cuando',
    'Where':'Donde',
    'What':'Qué',
    'advancedSearchOptions':'Opciones avanzadas de búsqueda',
    'hitsPerPage':'Resultados por página',
    'Searchforspatialdataon':'Buscar los datos espaciales sobre',
    'search':'Buscar',
    'fullTextSearch':'búsqueda de texto completo',
    'reset':'Limpiar',
    'resetSearchForm':'Restablecer el formulario de búsqueda',
    'Advanced':'Avanzado',
    'newWindow':'Nueva ventana',
    'mdEditor':'El Editor de Metadatos',
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
    'List':'Lista',
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
    'linklabel-WWW:DOWNLOAD-1.0-http--download': 'Download',
    'linklabel-application/x-compressed': 'Download',
    'linklabel-application/octet-stream': 'Download',
    'linklabel-text/html': 'Web link',
    'linklabel-text/plain': 'Web link',
    'linklabel-image/png': 'Image link',
    'linklabel-image/jpeg': 'Image link',
    'linklabel-': 'Link',
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

OpenLayers.Util.extend(OpenLayers.Lang.es, GeoNetwork.Lang.es);
