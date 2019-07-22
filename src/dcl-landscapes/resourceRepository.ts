////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//                                      DCL LANDSCAPES resource repository
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Model repository item
interface EntityRepositoryItem {
    id: number
    type: string
    fileName: string
}
interface EntityRepositoryItems extends Array<EntityRepositoryItem>{}

// Repository class
export class EntityRepository {
    private _dataSet: EntityRepositoryItems = [

    { id: 2, type: 'gltf', fileName: 'building_bridge-length_v01.gltf' },
    { id: 3, type: 'gltf', fileName: 'building_townhouse-base_v01.gltf' },
    { id: 5, type: 'gltf', fileName: 'building_townhouse-coffin_v01.gltf' },
    { id: 11, type: 'gltf', fileName: 'building_tunnel-ramp_v01.gltf' },
    { id: 12, type: 'gltf', fileName: 'building_tunnel-length_v01.gltf' },
    { id: 13, type: 'gltf', fileName: 'nature_cloud-10_v01.gltf' },
    { id: 14, type: 'gltf', fileName: 'building_bridge-center_v01.gltf' },
    { id: 15, type: 'gltf', fileName: 'nature_cloud-04_v01.gltf' },
    { id: 18, type: 'gltf', fileName: 'building_bldg-outercorner_v01.gltf' },
    { id: 19, type: 'gltf', fileName: 'nature_cloud-08_v01.gltf' },
    { id: 20, type: 'gltf', fileName: 'building_ramp-yellow_v01.gltf' },
    { id: 21, type: 'gltf', fileName: 'nature_cloud-02_v01.gltf' },
    { id: 22, type: 'gltf', fileName: 'building_ramp-red_v01.gltf' },
    { id: 25, type: 'gltf', fileName: 'nature_cloud-09_v01.gltf' },
    { id: 26, type: 'gltf', fileName: 'nature_cloud-06_v01.gltf' },
    { id: 29, type: 'gltf', fileName: 'building_tunnel-fork_v01.gltf' },
    { id: 30, type: 'gltf', fileName: 'nature_cloud-03_v01.gltf' },
    { id: 31, type: 'gltf', fileName: 'nature_cloud-05_v01.gltf' },
    { id: 34, type: 'gltf', fileName: 'building_bridge-fork_v01.gltf' },
    { id: 35, type: 'gltf', fileName: 'building_bridge-ramp_v01.gltf' },
    { id: 39, type: 'gltf', fileName: 'building_bldg-length_v01.gltf' },
    { id: 40, type: 'gltf', fileName: 'nature_cloud-07_v01.gltf' },
    { id: 43, type: 'gltf', fileName: 'building_bldg-innercorner_v01.gltf' },
    { id: 49, type: 'gltf', fileName: 'building_bridge-turn_v01.gltf' },
    { id: 50, type: 'gltf', fileName: 'nature_cloud-01_v01.gltf' },
    { id: 51, type: 'gltf', fileName: 'building_tunnel-turn_v01.gltf' },
    { id: 54, type: 'gltf', fileName: 'building_tunnel-center_v01.gltf' },
    { id: 56, type: 'gltf', fileName: 'building_townhouse-base_v03.gltf' },
    { id: 58, type: 'gltf', fileName: 'building_townhouse-base_v02.gltf' },
    { id: 59, type: 'gltf', fileName: 'terrain_massing2_v01.gltf' },
    { id: 61, type: 'gltf', fileName: 'terrain_massing1_v01.gltf' },
    { id: 65, type: 'gltf', fileName: 'art_text-dcllandscapes_v01.gltf' },
    { id: 66, type: 'gltf', fileName: 'art_text-ile_v01.gltf' },
    { id: 67, type: 'gltf', fileName: 'art_text-cryptovrontier_v01.gltf' },
    { id: 71, type: 'gltf', fileName: 'building_townhouse-deathstar_v01.gltf' },
    { id: 73, type: 'gltf', fileName: 'nature_tree-basic_v01.gltf' },
    { id: 74, type: 'gltf', fileName: 'nature_tree-abstract_v01.gltf' }
    ]

    public getFileName(id: number): string {
        for (let entry of this._dataSet) {
            if (entry.id == id)
                return entry.fileName
        }

    }

    public getType(id: number): string {
        for (let entry of this._dataSet) {
            if (entry.id == id)
                return entry.type
        }

    }
}
