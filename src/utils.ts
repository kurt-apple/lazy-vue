// export type Primitive = number | boolean | string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export function getVariableName (x: any) { return Object.keys({ x })[0] }

// export type thorn_in_side = { _?: boolean }
// export type OptionsArray = Array<string> & thorn_in_side
export const BOOLEAN_OPTIONS = {
  raw: 'raw',
  pretty: 'pretty',
  toggle: 'toggle',
  onOff: 'on-off'
} as const

export const PLAINTEXT_OPTIONS = {
  raw: 'raw',
  short: 'short',
  longLine: 'long-line',
  twoLine: 'two-line',
  long: 'long'
} as const

export interface PropStructure { name: string, edit: boolean, config?: string }
export interface GenericPropConfig {
  boolean_options?: string,
  plaintext_options?: string
}
export interface GenericPropStructure { name: string, edit?: boolean, showEdit?: boolean }

export interface EditableGenericPropStructure<T> { item: T, editMode: boolean }

export type SingularPrimitive = number | boolean | string | undefined | null

export type Obj = object | {
  [key: string]: SingularPrimitive | Obj | SingularPrimitive[] | Obj[]
}

export type Singular = Obj | SingularPrimitive

export type WTF = SingularPrimitive | SingularPrimitive[] | Obj | Obj[]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArray (value: any): value is WTF[] {
  return Array.isArray(value)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNotArray (value: Singular | Singular[]): value is Singular {
  return !Array.isArray(value)
}

export function isSingularObject (x: unknown | unknown[]): x is object { return typeof x === 'object' && isNotArray(x) }

export function isNotObject (x: object | unknown[] | SingularPrimitive): x is unknown[] | SingularPrimitive { return typeof x !== 'object' || isArray(x) }

export function isSingularPrimitive (x: unknown | unknown[]): x is SingularPrimitive { return typeof x === 'boolean' || typeof x === 'number' || typeof x === 'string' || typeof x === 'undefined' }
