// export const getBasePath = () => '/JZ-test-basePath';

// Gabriel will do this -- JZ can hardcode for testing purposes 
// export const getDataSource = (datasourceID: string) => {

//     // datasource: ocd-prometheus -- this is input but user on configMap 
//     const basePath = '/api/proxy/plugin/dashboards-datasource-plugin/backend/'; // e.g. prometheus/vi/api/..
//     const dataSourceType = 'prometheus'; // e.g. prometheus, loki, etc

//     return {basePath, dataSourceType};
// }

export const getDataSource = ( dataSourceID:string ) => {

    let basePath; 
    let dataSourceType;
    if (dataSourceID){
        basePath = '/api/proxy/plugin/dashboards-datasource-plugin/backend'; // e.g. prometheus/vi/api/..
        dataSourceType = 'prometheus'; // e.g. prometheus, loki, etc
    }
     
    return {basePath, dataSourceType};
}

