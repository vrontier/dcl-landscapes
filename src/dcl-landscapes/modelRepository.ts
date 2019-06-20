////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                      DCL LANDSCAPES model repository
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Model repository item
interface EntityRepositoryItem {
    modelId: number
    fileName: string
}
interface EntityRepositoryItems extends Array<EntityRepositoryItem>{}

// Repository class
export class EntityRepository {
    private _dataSet: EntityRepositoryItems = [

    { modelId: 2, fileName: 'building_bridge-length_v01.gltf' },
    { modelId: 3, fileName: 'building_townhouse-base_v01.gltf' },
    { modelId: 5, fileName: 'building_townhouse-coffin_v01.gltf' },
    { modelId: 11, fileName: 'building_tunnel-ramp_v01.gltf' },
    { modelId: 12, fileName: 'building_tunnel-length_v01.gltf' },
    { modelId: 13, fileName: 'nature_cloud-10_v01.gltf' },
    { modelId: 14, fileName: 'building_bridge-center_v01.gltf' },
    { modelId: 15, fileName: 'nature_cloud-04_v01.gltf' },
    { modelId: 18, fileName: 'building_bldg-outercorner_v01.gltf' },
    { modelId: 19, fileName: 'nature_cloud-08_v01.gltf' },
    { modelId: 20, fileName: 'building_ramp-yellow_v01.gltf' },
    { modelId: 21, fileName: 'nature_cloud-02_v01.gltf' },
    { modelId: 22, fileName: 'building_ramp-red_v01.gltf' },
    { modelId: 25, fileName: 'nature_cloud-09_v01.gltf' },
    { modelId: 26, fileName: 'nature_cloud-06_v01.gltf' },
    { modelId: 30, fileName: 'building_tunnel-fork_v01.gltf' },
    { modelId: 31, fileName: 'nature_cloud-03_v01.gltf' },
    { modelId: 32, fileName: 'nature_cloud-05_v01.gltf' },
    { modelId: 35, fileName: 'building_bridge-fork_v01.gltf' },
    { modelId: 36, fileName: 'building_bridge-ramp_v01.gltf' },
    { modelId: 40, fileName: 'building_bldg-length_v01.gltf' },
    { modelId: 41, fileName: 'nature_cloud-07_v01.gltf' },
    { modelId: 44, fileName: 'building_bldg-innercorner_v01.gltf' },
    { modelId: 49, fileName: 'building_bridge-turn_v01.gltf' },
    { modelId: 50, fileName: 'nature_cloud-01_v01.gltf' },
    { modelId: 51, fileName: 'building_tunnel-turn_v01.gltf' },
    { modelId: 54, fileName: 'building_tunnel-center_v01.gltf' }
    ]

    public modelFileName(modelId: number): string {
        for (let entry of this._dataSet) {
            if (entry.modelId == modelId)
                return entry.fileName
        }

    }
}