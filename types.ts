import { Vector3 } from "./Vector";

export interface UnsanitizedSceneManifest {
  version: number;
  assets: AssetDefinition[];
  assetTags?: AssetTagDefinition[];
  requiredTags?: string[];
  main: string;
  referenceSystem?: ReferenceSystem;
  parcels: NonEmptyCoordinateDefinitionArray;
  contact?: Record<string, string>;
  spawnPoints?: [SpawnPoint, ...SpawnPoint[]];
  display?: DisplayDefinition;
}
export declare type NamedAsset = {
  name: string;
  hash: string;
};
export declare type URIAsset = {
  name: string;
  uri: string;
};
export declare type AssetDefinition = NamedAsset | URIAsset;
export declare type NonEmptyStringArray = [string, ...string[]];
export declare type AssetTagDefinition = {
  name: string;
  assets: NonEmptyStringArray;
};
export declare type Range2 = [number, number];
export declare type NumberOrRange = number | Range2;
export declare type Vector3Range = {
  x: NumberOrRange;
  y: NumberOrRange;
  z: NumberOrRange;
};
export declare type QuaternionRange = {
  x: NumberOrRange;
  y: NumberOrRange;
  z: NumberOrRange;
  w: NumberOrRange;
};
export declare type PartialVector3 = Partial<Vector3>;
export declare type YRotation = {
  y: NumberOrRange;
};
export declare type Coordinate = {
  x: number;
  y: number;
};
export declare type CoordinateDefinition = string | Coordinate;
export declare type DisplayDefinition = {
  title?: string;
  snapshot?: string;
};
export declare type ReferenceSystem = {
  rotation?: YRotation;
  position?: Vector3Range;
};
export declare type SpawnPoint = {
  name?: string;
  position: Vector3Range;
  camera: QuaternionRange | YRotation;
  default?: boolean;
};
export declare type NonEmptyCoordinateDefinitionArray = [
  CoordinateDefinition,
  ...CoordinateDefinition[]
];
export declare type NonEmptyCoordinateArray = [Coordinate, ...Coordinate[]];

export interface ILand {
  /**
   * sceneId: Now it is either an internal identifier or the rootCID.
   * In the future will change to the sceneCID
   */
  sceneId: string;
  scene: ILegacyScene;
  baseUrl: string;
  mappingsResponse: MappingsResponse;
}

export type MappingsResponse = {
  parcel_id: string;
  publisher: string;
  root_cid: string;
  contents: Array<ContentMapping>;
};

export type ContentMapping = { file: string; hash: string };

export interface ISceneManifest {
  version: number;
  assets: AssetDefinition[];
  assetTags: AssetTagDefinition[];
  requiredAssets: AssetDefinition[];
  cannonicalCID: string;
  main: string;
  referenceSystem: ReferenceSystem;
  parcels: NonEmptyCoordinateArray;
  spawnPoints: SpawnPoint[];
  title: string;
  screenshot: string;
}

export interface ILegacyScene {
  assets?: Record<any, string>;
  main: string;
  scene: {
    base: string;
    parcels: string[];
  };
  _mappings?: Record<string, string>;
}
