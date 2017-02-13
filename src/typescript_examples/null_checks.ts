let name: string = 'ben'
// name = undefined // will not be an error if strictNullChecks is false in tsconfig.json

let notNull: string | undefined
notNull = undefined

function f(sn: string | null): string {
  if (sn === null) {
    return 'default'
  } else {
    return sn
  }
}

export default f

