
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model kamar
 * 
 */
export type kamar = $Result.DefaultSelection<Prisma.$kamarPayload>
/**
 * Model karyawan
 * 
 */
export type karyawan = $Result.DefaultSelection<Prisma.$karyawanPayload>
/**
 * Model reservasi
 * 
 */
export type reservasi = $Result.DefaultSelection<Prisma.$reservasiPayload>
/**
 * Model tamu
 * 
 */
export type tamu = $Result.DefaultSelection<Prisma.$tamuPayload>
/**
 * Model tipe_kamar
 * 
 */
export type tipe_kamar = $Result.DefaultSelection<Prisma.$tipe_kamarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const kamar_status: {
  Tersedia: 'Tersedia',
  Terisi: 'Terisi',
  Dipesan: 'Dipesan',
  Pembersihan: 'Pembersihan'
};

export type kamar_status = (typeof kamar_status)[keyof typeof kamar_status]


export const karyawan_role: {
  Admin: 'Admin',
  Resepsionis: 'Resepsionis'
};

export type karyawan_role = (typeof karyawan_role)[keyof typeof karyawan_role]


export const reservasi_metode_pembayaran: {
  Cash: 'Cash',
  Transfer: 'Transfer',
  Debit: 'Debit',
  Kredit: 'Kredit'
};

export type reservasi_metode_pembayaran = (typeof reservasi_metode_pembayaran)[keyof typeof reservasi_metode_pembayaran]


export const reservasi_status: {
  Pending: 'Pending',
  Dikonfirmasi: 'Dikonfirmasi',
  Check_In: 'Check_In',
  Check_Out: 'Check_Out',
  Dibatalkan: 'Dibatalkan'
};

export type reservasi_status = (typeof reservasi_status)[keyof typeof reservasi_status]

}

export type kamar_status = $Enums.kamar_status

export const kamar_status: typeof $Enums.kamar_status

export type karyawan_role = $Enums.karyawan_role

export const karyawan_role: typeof $Enums.karyawan_role

export type reservasi_metode_pembayaran = $Enums.reservasi_metode_pembayaran

export const reservasi_metode_pembayaran: typeof $Enums.reservasi_metode_pembayaran

export type reservasi_status = $Enums.reservasi_status

export const reservasi_status: typeof $Enums.reservasi_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Kamars
 * const kamars = await prisma.kamar.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Kamars
   * const kamars = await prisma.kamar.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kamar`: Exposes CRUD operations for the **kamar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kamars
    * const kamars = await prisma.kamar.findMany()
    * ```
    */
  get kamar(): Prisma.kamarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.karyawan`: Exposes CRUD operations for the **karyawan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Karyawans
    * const karyawans = await prisma.karyawan.findMany()
    * ```
    */
  get karyawan(): Prisma.karyawanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservasi`: Exposes CRUD operations for the **reservasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservasis
    * const reservasis = await prisma.reservasi.findMany()
    * ```
    */
  get reservasi(): Prisma.reservasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tamu`: Exposes CRUD operations for the **tamu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tamus
    * const tamus = await prisma.tamu.findMany()
    * ```
    */
  get tamu(): Prisma.tamuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipe_kamar`: Exposes CRUD operations for the **tipe_kamar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipe_kamars
    * const tipe_kamars = await prisma.tipe_kamar.findMany()
    * ```
    */
  get tipe_kamar(): Prisma.tipe_kamarDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    kamar: 'kamar',
    karyawan: 'karyawan',
    reservasi: 'reservasi',
    tamu: 'tamu',
    tipe_kamar: 'tipe_kamar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "kamar" | "karyawan" | "reservasi" | "tamu" | "tipe_kamar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      kamar: {
        payload: Prisma.$kamarPayload<ExtArgs>
        fields: Prisma.kamarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kamarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kamarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          findFirst: {
            args: Prisma.kamarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kamarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          findMany: {
            args: Prisma.kamarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>[]
          }
          create: {
            args: Prisma.kamarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          createMany: {
            args: Prisma.kamarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kamarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          update: {
            args: Prisma.kamarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          deleteMany: {
            args: Prisma.kamarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kamarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kamarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kamarPayload>
          }
          aggregate: {
            args: Prisma.KamarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKamar>
          }
          groupBy: {
            args: Prisma.kamarGroupByArgs<ExtArgs>
            result: $Utils.Optional<KamarGroupByOutputType>[]
          }
          count: {
            args: Prisma.kamarCountArgs<ExtArgs>
            result: $Utils.Optional<KamarCountAggregateOutputType> | number
          }
        }
      }
      karyawan: {
        payload: Prisma.$karyawanPayload<ExtArgs>
        fields: Prisma.karyawanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.karyawanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.karyawanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          findFirst: {
            args: Prisma.karyawanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.karyawanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          findMany: {
            args: Prisma.karyawanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>[]
          }
          create: {
            args: Prisma.karyawanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          createMany: {
            args: Prisma.karyawanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.karyawanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          update: {
            args: Prisma.karyawanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          deleteMany: {
            args: Prisma.karyawanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.karyawanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.karyawanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$karyawanPayload>
          }
          aggregate: {
            args: Prisma.KaryawanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKaryawan>
          }
          groupBy: {
            args: Prisma.karyawanGroupByArgs<ExtArgs>
            result: $Utils.Optional<KaryawanGroupByOutputType>[]
          }
          count: {
            args: Prisma.karyawanCountArgs<ExtArgs>
            result: $Utils.Optional<KaryawanCountAggregateOutputType> | number
          }
        }
      }
      reservasi: {
        payload: Prisma.$reservasiPayload<ExtArgs>
        fields: Prisma.reservasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          findFirst: {
            args: Prisma.reservasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          findMany: {
            args: Prisma.reservasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>[]
          }
          create: {
            args: Prisma.reservasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          createMany: {
            args: Prisma.reservasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.reservasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          update: {
            args: Prisma.reservasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          deleteMany: {
            args: Prisma.reservasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.reservasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasiPayload>
          }
          aggregate: {
            args: Prisma.ReservasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservasi>
          }
          groupBy: {
            args: Prisma.reservasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasiCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasiCountAggregateOutputType> | number
          }
        }
      }
      tamu: {
        payload: Prisma.$tamuPayload<ExtArgs>
        fields: Prisma.tamuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tamuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tamuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          findFirst: {
            args: Prisma.tamuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tamuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          findMany: {
            args: Prisma.tamuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>[]
          }
          create: {
            args: Prisma.tamuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          createMany: {
            args: Prisma.tamuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tamuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          update: {
            args: Prisma.tamuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          deleteMany: {
            args: Prisma.tamuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tamuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tamuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tamuPayload>
          }
          aggregate: {
            args: Prisma.TamuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTamu>
          }
          groupBy: {
            args: Prisma.tamuGroupByArgs<ExtArgs>
            result: $Utils.Optional<TamuGroupByOutputType>[]
          }
          count: {
            args: Prisma.tamuCountArgs<ExtArgs>
            result: $Utils.Optional<TamuCountAggregateOutputType> | number
          }
        }
      }
      tipe_kamar: {
        payload: Prisma.$tipe_kamarPayload<ExtArgs>
        fields: Prisma.tipe_kamarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipe_kamarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipe_kamarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          findFirst: {
            args: Prisma.tipe_kamarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipe_kamarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          findMany: {
            args: Prisma.tipe_kamarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>[]
          }
          create: {
            args: Prisma.tipe_kamarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          createMany: {
            args: Prisma.tipe_kamarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tipe_kamarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          update: {
            args: Prisma.tipe_kamarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          deleteMany: {
            args: Prisma.tipe_kamarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipe_kamarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tipe_kamarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_kamarPayload>
          }
          aggregate: {
            args: Prisma.Tipe_kamarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipe_kamar>
          }
          groupBy: {
            args: Prisma.tipe_kamarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipe_kamarGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipe_kamarCountArgs<ExtArgs>
            result: $Utils.Optional<Tipe_kamarCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    kamar?: kamarOmit
    karyawan?: karyawanOmit
    reservasi?: reservasiOmit
    tamu?: tamuOmit
    tipe_kamar?: tipe_kamarOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type KamarCountOutputType
   */

  export type KamarCountOutputType = {
    reservasi: number
  }

  export type KamarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasi?: boolean | KamarCountOutputTypeCountReservasiArgs
  }

  // Custom InputTypes
  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KamarCountOutputType
     */
    select?: KamarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KamarCountOutputType without action
   */
  export type KamarCountOutputTypeCountReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasiWhereInput
  }


  /**
   * Count Type KaryawanCountOutputType
   */

  export type KaryawanCountOutputType = {
    reservasi: number
  }

  export type KaryawanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasi?: boolean | KaryawanCountOutputTypeCountReservasiArgs
  }

  // Custom InputTypes
  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KaryawanCountOutputType
     */
    select?: KaryawanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KaryawanCountOutputType without action
   */
  export type KaryawanCountOutputTypeCountReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasiWhereInput
  }


  /**
   * Count Type TamuCountOutputType
   */

  export type TamuCountOutputType = {
    reservasi: number
  }

  export type TamuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasi?: boolean | TamuCountOutputTypeCountReservasiArgs
  }

  // Custom InputTypes
  /**
   * TamuCountOutputType without action
   */
  export type TamuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TamuCountOutputType
     */
    select?: TamuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TamuCountOutputType without action
   */
  export type TamuCountOutputTypeCountReservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasiWhereInput
  }


  /**
   * Count Type Tipe_kamarCountOutputType
   */

  export type Tipe_kamarCountOutputType = {
    kamar: number
  }

  export type Tipe_kamarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamar?: boolean | Tipe_kamarCountOutputTypeCountKamarArgs
  }

  // Custom InputTypes
  /**
   * Tipe_kamarCountOutputType without action
   */
  export type Tipe_kamarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tipe_kamarCountOutputType
     */
    select?: Tipe_kamarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tipe_kamarCountOutputType without action
   */
  export type Tipe_kamarCountOutputTypeCountKamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kamarWhereInput
  }


  /**
   * Models
   */

  /**
   * Model kamar
   */

  export type AggregateKamar = {
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  export type KamarAvgAggregateOutputType = {
    id_kamar: number | null
    id_tipe_kamar: number | null
  }

  export type KamarSumAggregateOutputType = {
    id_kamar: number | null
    id_tipe_kamar: number | null
  }

  export type KamarMinAggregateOutputType = {
    id_kamar: number | null
    id_tipe_kamar: number | null
    nomor_kamar: string | null
    status: $Enums.kamar_status | null
  }

  export type KamarMaxAggregateOutputType = {
    id_kamar: number | null
    id_tipe_kamar: number | null
    nomor_kamar: string | null
    status: $Enums.kamar_status | null
  }

  export type KamarCountAggregateOutputType = {
    id_kamar: number
    id_tipe_kamar: number
    nomor_kamar: number
    status: number
    _all: number
  }


  export type KamarAvgAggregateInputType = {
    id_kamar?: true
    id_tipe_kamar?: true
  }

  export type KamarSumAggregateInputType = {
    id_kamar?: true
    id_tipe_kamar?: true
  }

  export type KamarMinAggregateInputType = {
    id_kamar?: true
    id_tipe_kamar?: true
    nomor_kamar?: true
    status?: true
  }

  export type KamarMaxAggregateInputType = {
    id_kamar?: true
    id_tipe_kamar?: true
    nomor_kamar?: true
    status?: true
  }

  export type KamarCountAggregateInputType = {
    id_kamar?: true
    id_tipe_kamar?: true
    nomor_kamar?: true
    status?: true
    _all?: true
  }

  export type KamarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kamar to aggregate.
     */
    where?: kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kamars to fetch.
     */
    orderBy?: kamarOrderByWithRelationInput | kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kamars
    **/
    _count?: true | KamarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KamarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KamarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KamarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KamarMaxAggregateInputType
  }

  export type GetKamarAggregateType<T extends KamarAggregateArgs> = {
        [P in keyof T & keyof AggregateKamar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKamar[P]>
      : GetScalarType<T[P], AggregateKamar[P]>
  }




  export type kamarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kamarWhereInput
    orderBy?: kamarOrderByWithAggregationInput | kamarOrderByWithAggregationInput[]
    by: KamarScalarFieldEnum[] | KamarScalarFieldEnum
    having?: kamarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KamarCountAggregateInputType | true
    _avg?: KamarAvgAggregateInputType
    _sum?: KamarSumAggregateInputType
    _min?: KamarMinAggregateInputType
    _max?: KamarMaxAggregateInputType
  }

  export type KamarGroupByOutputType = {
    id_kamar: number
    id_tipe_kamar: number
    nomor_kamar: string
    status: $Enums.kamar_status | null
    _count: KamarCountAggregateOutputType | null
    _avg: KamarAvgAggregateOutputType | null
    _sum: KamarSumAggregateOutputType | null
    _min: KamarMinAggregateOutputType | null
    _max: KamarMaxAggregateOutputType | null
  }

  type GetKamarGroupByPayload<T extends kamarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KamarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KamarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KamarGroupByOutputType[P]>
            : GetScalarType<T[P], KamarGroupByOutputType[P]>
        }
      >
    >


  export type kamarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kamar?: boolean
    id_tipe_kamar?: boolean
    nomor_kamar?: boolean
    status?: boolean
    tipe_kamar?: boolean | tipe_kamarDefaultArgs<ExtArgs>
    reservasi?: boolean | kamar$reservasiArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kamar"]>



  export type kamarSelectScalar = {
    id_kamar?: boolean
    id_tipe_kamar?: boolean
    nomor_kamar?: boolean
    status?: boolean
  }

  export type kamarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kamar" | "id_tipe_kamar" | "nomor_kamar" | "status", ExtArgs["result"]["kamar"]>
  export type kamarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipe_kamar?: boolean | tipe_kamarDefaultArgs<ExtArgs>
    reservasi?: boolean | kamar$reservasiArgs<ExtArgs>
    _count?: boolean | KamarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $kamarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kamar"
    objects: {
      tipe_kamar: Prisma.$tipe_kamarPayload<ExtArgs>
      reservasi: Prisma.$reservasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kamar: number
      id_tipe_kamar: number
      nomor_kamar: string
      status: $Enums.kamar_status | null
    }, ExtArgs["result"]["kamar"]>
    composites: {}
  }

  type kamarGetPayload<S extends boolean | null | undefined | kamarDefaultArgs> = $Result.GetResult<Prisma.$kamarPayload, S>

  type kamarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kamarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KamarCountAggregateInputType | true
    }

  export interface kamarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kamar'], meta: { name: 'kamar' } }
    /**
     * Find zero or one Kamar that matches the filter.
     * @param {kamarFindUniqueArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kamarFindUniqueArgs>(args: SelectSubset<T, kamarFindUniqueArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kamar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kamarFindUniqueOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kamarFindUniqueOrThrowArgs>(args: SelectSubset<T, kamarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarFindFirstArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kamarFindFirstArgs>(args?: SelectSubset<T, kamarFindFirstArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kamar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarFindFirstOrThrowArgs} args - Arguments to find a Kamar
     * @example
     * // Get one Kamar
     * const kamar = await prisma.kamar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kamarFindFirstOrThrowArgs>(args?: SelectSubset<T, kamarFindFirstOrThrowArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kamars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kamars
     * const kamars = await prisma.kamar.findMany()
     * 
     * // Get first 10 Kamars
     * const kamars = await prisma.kamar.findMany({ take: 10 })
     * 
     * // Only select the `id_kamar`
     * const kamarWithId_kamarOnly = await prisma.kamar.findMany({ select: { id_kamar: true } })
     * 
     */
    findMany<T extends kamarFindManyArgs>(args?: SelectSubset<T, kamarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kamar.
     * @param {kamarCreateArgs} args - Arguments to create a Kamar.
     * @example
     * // Create one Kamar
     * const Kamar = await prisma.kamar.create({
     *   data: {
     *     // ... data to create a Kamar
     *   }
     * })
     * 
     */
    create<T extends kamarCreateArgs>(args: SelectSubset<T, kamarCreateArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kamars.
     * @param {kamarCreateManyArgs} args - Arguments to create many Kamars.
     * @example
     * // Create many Kamars
     * const kamar = await prisma.kamar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kamarCreateManyArgs>(args?: SelectSubset<T, kamarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kamar.
     * @param {kamarDeleteArgs} args - Arguments to delete one Kamar.
     * @example
     * // Delete one Kamar
     * const Kamar = await prisma.kamar.delete({
     *   where: {
     *     // ... filter to delete one Kamar
     *   }
     * })
     * 
     */
    delete<T extends kamarDeleteArgs>(args: SelectSubset<T, kamarDeleteArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kamar.
     * @param {kamarUpdateArgs} args - Arguments to update one Kamar.
     * @example
     * // Update one Kamar
     * const kamar = await prisma.kamar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kamarUpdateArgs>(args: SelectSubset<T, kamarUpdateArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kamars.
     * @param {kamarDeleteManyArgs} args - Arguments to filter Kamars to delete.
     * @example
     * // Delete a few Kamars
     * const { count } = await prisma.kamar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kamarDeleteManyArgs>(args?: SelectSubset<T, kamarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kamars
     * const kamar = await prisma.kamar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kamarUpdateManyArgs>(args: SelectSubset<T, kamarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kamar.
     * @param {kamarUpsertArgs} args - Arguments to update or create a Kamar.
     * @example
     * // Update or create a Kamar
     * const kamar = await prisma.kamar.upsert({
     *   create: {
     *     // ... data to create a Kamar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kamar we want to update
     *   }
     * })
     */
    upsert<T extends kamarUpsertArgs>(args: SelectSubset<T, kamarUpsertArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarCountArgs} args - Arguments to filter Kamars to count.
     * @example
     * // Count the number of Kamars
     * const count = await prisma.kamar.count({
     *   where: {
     *     // ... the filter for the Kamars we want to count
     *   }
     * })
    **/
    count<T extends kamarCountArgs>(
      args?: Subset<T, kamarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KamarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KamarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KamarAggregateArgs>(args: Subset<T, KamarAggregateArgs>): Prisma.PrismaPromise<GetKamarAggregateType<T>>

    /**
     * Group by Kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kamarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kamarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kamarGroupByArgs['orderBy'] }
        : { orderBy?: kamarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kamarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKamarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kamar model
   */
  readonly fields: kamarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kamar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kamarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipe_kamar<T extends tipe_kamarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tipe_kamarDefaultArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservasi<T extends kamar$reservasiArgs<ExtArgs> = {}>(args?: Subset<T, kamar$reservasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kamar model
   */
  interface kamarFieldRefs {
    readonly id_kamar: FieldRef<"kamar", 'Int'>
    readonly id_tipe_kamar: FieldRef<"kamar", 'Int'>
    readonly nomor_kamar: FieldRef<"kamar", 'String'>
    readonly status: FieldRef<"kamar", 'kamar_status'>
  }
    

  // Custom InputTypes
  /**
   * kamar findUnique
   */
  export type kamarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter, which kamar to fetch.
     */
    where: kamarWhereUniqueInput
  }

  /**
   * kamar findUniqueOrThrow
   */
  export type kamarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter, which kamar to fetch.
     */
    where: kamarWhereUniqueInput
  }

  /**
   * kamar findFirst
   */
  export type kamarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter, which kamar to fetch.
     */
    where?: kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kamars to fetch.
     */
    orderBy?: kamarOrderByWithRelationInput | kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kamars.
     */
    cursor?: kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * kamar findFirstOrThrow
   */
  export type kamarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter, which kamar to fetch.
     */
    where?: kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kamars to fetch.
     */
    orderBy?: kamarOrderByWithRelationInput | kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kamars.
     */
    cursor?: kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * kamar findMany
   */
  export type kamarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter, which kamars to fetch.
     */
    where?: kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kamars to fetch.
     */
    orderBy?: kamarOrderByWithRelationInput | kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kamars.
     */
    cursor?: kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kamars.
     */
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * kamar create
   */
  export type kamarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * The data needed to create a kamar.
     */
    data: XOR<kamarCreateInput, kamarUncheckedCreateInput>
  }

  /**
   * kamar createMany
   */
  export type kamarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kamars.
     */
    data: kamarCreateManyInput | kamarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kamar update
   */
  export type kamarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * The data needed to update a kamar.
     */
    data: XOR<kamarUpdateInput, kamarUncheckedUpdateInput>
    /**
     * Choose, which kamar to update.
     */
    where: kamarWhereUniqueInput
  }

  /**
   * kamar updateMany
   */
  export type kamarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kamars.
     */
    data: XOR<kamarUpdateManyMutationInput, kamarUncheckedUpdateManyInput>
    /**
     * Filter which kamars to update
     */
    where?: kamarWhereInput
    /**
     * Limit how many kamars to update.
     */
    limit?: number
  }

  /**
   * kamar upsert
   */
  export type kamarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * The filter to search for the kamar to update in case it exists.
     */
    where: kamarWhereUniqueInput
    /**
     * In case the kamar found by the `where` argument doesn't exist, create a new kamar with this data.
     */
    create: XOR<kamarCreateInput, kamarUncheckedCreateInput>
    /**
     * In case the kamar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kamarUpdateInput, kamarUncheckedUpdateInput>
  }

  /**
   * kamar delete
   */
  export type kamarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    /**
     * Filter which kamar to delete.
     */
    where: kamarWhereUniqueInput
  }

  /**
   * kamar deleteMany
   */
  export type kamarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kamars to delete
     */
    where?: kamarWhereInput
    /**
     * Limit how many kamars to delete.
     */
    limit?: number
  }

  /**
   * kamar.reservasi
   */
  export type kamar$reservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    where?: reservasiWhereInput
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    cursor?: reservasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * kamar without action
   */
  export type kamarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
  }


  /**
   * Model karyawan
   */

  export type AggregateKaryawan = {
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  export type KaryawanAvgAggregateOutputType = {
    id_karyawan: number | null
  }

  export type KaryawanSumAggregateOutputType = {
    id_karyawan: number | null
  }

  export type KaryawanMinAggregateOutputType = {
    id_karyawan: number | null
    nama_karyawan: string | null
    username: string | null
    email: string | null
    password: string | null
    no_hp_karyawan: string | null
    role: $Enums.karyawan_role | null
  }

  export type KaryawanMaxAggregateOutputType = {
    id_karyawan: number | null
    nama_karyawan: string | null
    username: string | null
    email: string | null
    password: string | null
    no_hp_karyawan: string | null
    role: $Enums.karyawan_role | null
  }

  export type KaryawanCountAggregateOutputType = {
    id_karyawan: number
    nama_karyawan: number
    username: number
    email: number
    password: number
    no_hp_karyawan: number
    role: number
    _all: number
  }


  export type KaryawanAvgAggregateInputType = {
    id_karyawan?: true
  }

  export type KaryawanSumAggregateInputType = {
    id_karyawan?: true
  }

  export type KaryawanMinAggregateInputType = {
    id_karyawan?: true
    nama_karyawan?: true
    username?: true
    email?: true
    password?: true
    no_hp_karyawan?: true
    role?: true
  }

  export type KaryawanMaxAggregateInputType = {
    id_karyawan?: true
    nama_karyawan?: true
    username?: true
    email?: true
    password?: true
    no_hp_karyawan?: true
    role?: true
  }

  export type KaryawanCountAggregateInputType = {
    id_karyawan?: true
    nama_karyawan?: true
    username?: true
    email?: true
    password?: true
    no_hp_karyawan?: true
    role?: true
    _all?: true
  }

  export type KaryawanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which karyawan to aggregate.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned karyawans
    **/
    _count?: true | KaryawanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KaryawanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KaryawanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KaryawanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KaryawanMaxAggregateInputType
  }

  export type GetKaryawanAggregateType<T extends KaryawanAggregateArgs> = {
        [P in keyof T & keyof AggregateKaryawan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKaryawan[P]>
      : GetScalarType<T[P], AggregateKaryawan[P]>
  }




  export type karyawanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: karyawanWhereInput
    orderBy?: karyawanOrderByWithAggregationInput | karyawanOrderByWithAggregationInput[]
    by: KaryawanScalarFieldEnum[] | KaryawanScalarFieldEnum
    having?: karyawanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KaryawanCountAggregateInputType | true
    _avg?: KaryawanAvgAggregateInputType
    _sum?: KaryawanSumAggregateInputType
    _min?: KaryawanMinAggregateInputType
    _max?: KaryawanMaxAggregateInputType
  }

  export type KaryawanGroupByOutputType = {
    id_karyawan: number
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role: $Enums.karyawan_role | null
    _count: KaryawanCountAggregateOutputType | null
    _avg: KaryawanAvgAggregateOutputType | null
    _sum: KaryawanSumAggregateOutputType | null
    _min: KaryawanMinAggregateOutputType | null
    _max: KaryawanMaxAggregateOutputType | null
  }

  type GetKaryawanGroupByPayload<T extends karyawanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KaryawanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KaryawanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
            : GetScalarType<T[P], KaryawanGroupByOutputType[P]>
        }
      >
    >


  export type karyawanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_karyawan?: boolean
    nama_karyawan?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    no_hp_karyawan?: boolean
    role?: boolean
    reservasi?: boolean | karyawan$reservasiArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["karyawan"]>



  export type karyawanSelectScalar = {
    id_karyawan?: boolean
    nama_karyawan?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    no_hp_karyawan?: boolean
    role?: boolean
  }

  export type karyawanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_karyawan" | "nama_karyawan" | "username" | "email" | "password" | "no_hp_karyawan" | "role", ExtArgs["result"]["karyawan"]>
  export type karyawanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasi?: boolean | karyawan$reservasiArgs<ExtArgs>
    _count?: boolean | KaryawanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $karyawanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "karyawan"
    objects: {
      reservasi: Prisma.$reservasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_karyawan: number
      nama_karyawan: string
      username: string
      email: string
      password: string
      no_hp_karyawan: string
      role: $Enums.karyawan_role | null
    }, ExtArgs["result"]["karyawan"]>
    composites: {}
  }

  type karyawanGetPayload<S extends boolean | null | undefined | karyawanDefaultArgs> = $Result.GetResult<Prisma.$karyawanPayload, S>

  type karyawanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<karyawanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KaryawanCountAggregateInputType | true
    }

  export interface karyawanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['karyawan'], meta: { name: 'karyawan' } }
    /**
     * Find zero or one Karyawan that matches the filter.
     * @param {karyawanFindUniqueArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends karyawanFindUniqueArgs>(args: SelectSubset<T, karyawanFindUniqueArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Karyawan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {karyawanFindUniqueOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends karyawanFindUniqueOrThrowArgs>(args: SelectSubset<T, karyawanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindFirstArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends karyawanFindFirstArgs>(args?: SelectSubset<T, karyawanFindFirstArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Karyawan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindFirstOrThrowArgs} args - Arguments to find a Karyawan
     * @example
     * // Get one Karyawan
     * const karyawan = await prisma.karyawan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends karyawanFindFirstOrThrowArgs>(args?: SelectSubset<T, karyawanFindFirstOrThrowArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Karyawans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Karyawans
     * const karyawans = await prisma.karyawan.findMany()
     * 
     * // Get first 10 Karyawans
     * const karyawans = await prisma.karyawan.findMany({ take: 10 })
     * 
     * // Only select the `id_karyawan`
     * const karyawanWithId_karyawanOnly = await prisma.karyawan.findMany({ select: { id_karyawan: true } })
     * 
     */
    findMany<T extends karyawanFindManyArgs>(args?: SelectSubset<T, karyawanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Karyawan.
     * @param {karyawanCreateArgs} args - Arguments to create a Karyawan.
     * @example
     * // Create one Karyawan
     * const Karyawan = await prisma.karyawan.create({
     *   data: {
     *     // ... data to create a Karyawan
     *   }
     * })
     * 
     */
    create<T extends karyawanCreateArgs>(args: SelectSubset<T, karyawanCreateArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Karyawans.
     * @param {karyawanCreateManyArgs} args - Arguments to create many Karyawans.
     * @example
     * // Create many Karyawans
     * const karyawan = await prisma.karyawan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends karyawanCreateManyArgs>(args?: SelectSubset<T, karyawanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Karyawan.
     * @param {karyawanDeleteArgs} args - Arguments to delete one Karyawan.
     * @example
     * // Delete one Karyawan
     * const Karyawan = await prisma.karyawan.delete({
     *   where: {
     *     // ... filter to delete one Karyawan
     *   }
     * })
     * 
     */
    delete<T extends karyawanDeleteArgs>(args: SelectSubset<T, karyawanDeleteArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Karyawan.
     * @param {karyawanUpdateArgs} args - Arguments to update one Karyawan.
     * @example
     * // Update one Karyawan
     * const karyawan = await prisma.karyawan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends karyawanUpdateArgs>(args: SelectSubset<T, karyawanUpdateArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Karyawans.
     * @param {karyawanDeleteManyArgs} args - Arguments to filter Karyawans to delete.
     * @example
     * // Delete a few Karyawans
     * const { count } = await prisma.karyawan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends karyawanDeleteManyArgs>(args?: SelectSubset<T, karyawanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Karyawans
     * const karyawan = await prisma.karyawan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends karyawanUpdateManyArgs>(args: SelectSubset<T, karyawanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Karyawan.
     * @param {karyawanUpsertArgs} args - Arguments to update or create a Karyawan.
     * @example
     * // Update or create a Karyawan
     * const karyawan = await prisma.karyawan.upsert({
     *   create: {
     *     // ... data to create a Karyawan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Karyawan we want to update
     *   }
     * })
     */
    upsert<T extends karyawanUpsertArgs>(args: SelectSubset<T, karyawanUpsertArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Karyawans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanCountArgs} args - Arguments to filter Karyawans to count.
     * @example
     * // Count the number of Karyawans
     * const count = await prisma.karyawan.count({
     *   where: {
     *     // ... the filter for the Karyawans we want to count
     *   }
     * })
    **/
    count<T extends karyawanCountArgs>(
      args?: Subset<T, karyawanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KaryawanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KaryawanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KaryawanAggregateArgs>(args: Subset<T, KaryawanAggregateArgs>): Prisma.PrismaPromise<GetKaryawanAggregateType<T>>

    /**
     * Group by Karyawan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {karyawanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends karyawanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: karyawanGroupByArgs['orderBy'] }
        : { orderBy?: karyawanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, karyawanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKaryawanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the karyawan model
   */
  readonly fields: karyawanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for karyawan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__karyawanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservasi<T extends karyawan$reservasiArgs<ExtArgs> = {}>(args?: Subset<T, karyawan$reservasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the karyawan model
   */
  interface karyawanFieldRefs {
    readonly id_karyawan: FieldRef<"karyawan", 'Int'>
    readonly nama_karyawan: FieldRef<"karyawan", 'String'>
    readonly username: FieldRef<"karyawan", 'String'>
    readonly email: FieldRef<"karyawan", 'String'>
    readonly password: FieldRef<"karyawan", 'String'>
    readonly no_hp_karyawan: FieldRef<"karyawan", 'String'>
    readonly role: FieldRef<"karyawan", 'karyawan_role'>
  }
    

  // Custom InputTypes
  /**
   * karyawan findUnique
   */
  export type karyawanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where: karyawanWhereUniqueInput
  }

  /**
   * karyawan findUniqueOrThrow
   */
  export type karyawanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where: karyawanWhereUniqueInput
  }

  /**
   * karyawan findFirst
   */
  export type karyawanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * karyawan findFirstOrThrow
   */
  export type karyawanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter, which karyawan to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * karyawan findMany
   */
  export type karyawanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter, which karyawans to fetch.
     */
    where?: karyawanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of karyawans to fetch.
     */
    orderBy?: karyawanOrderByWithRelationInput | karyawanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing karyawans.
     */
    cursor?: karyawanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` karyawans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` karyawans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of karyawans.
     */
    distinct?: KaryawanScalarFieldEnum | KaryawanScalarFieldEnum[]
  }

  /**
   * karyawan create
   */
  export type karyawanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * The data needed to create a karyawan.
     */
    data: XOR<karyawanCreateInput, karyawanUncheckedCreateInput>
  }

  /**
   * karyawan createMany
   */
  export type karyawanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many karyawans.
     */
    data: karyawanCreateManyInput | karyawanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * karyawan update
   */
  export type karyawanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * The data needed to update a karyawan.
     */
    data: XOR<karyawanUpdateInput, karyawanUncheckedUpdateInput>
    /**
     * Choose, which karyawan to update.
     */
    where: karyawanWhereUniqueInput
  }

  /**
   * karyawan updateMany
   */
  export type karyawanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update karyawans.
     */
    data: XOR<karyawanUpdateManyMutationInput, karyawanUncheckedUpdateManyInput>
    /**
     * Filter which karyawans to update
     */
    where?: karyawanWhereInput
    /**
     * Limit how many karyawans to update.
     */
    limit?: number
  }

  /**
   * karyawan upsert
   */
  export type karyawanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * The filter to search for the karyawan to update in case it exists.
     */
    where: karyawanWhereUniqueInput
    /**
     * In case the karyawan found by the `where` argument doesn't exist, create a new karyawan with this data.
     */
    create: XOR<karyawanCreateInput, karyawanUncheckedCreateInput>
    /**
     * In case the karyawan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<karyawanUpdateInput, karyawanUncheckedUpdateInput>
  }

  /**
   * karyawan delete
   */
  export type karyawanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
    /**
     * Filter which karyawan to delete.
     */
    where: karyawanWhereUniqueInput
  }

  /**
   * karyawan deleteMany
   */
  export type karyawanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which karyawans to delete
     */
    where?: karyawanWhereInput
    /**
     * Limit how many karyawans to delete.
     */
    limit?: number
  }

  /**
   * karyawan.reservasi
   */
  export type karyawan$reservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    where?: reservasiWhereInput
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    cursor?: reservasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * karyawan without action
   */
  export type karyawanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the karyawan
     */
    select?: karyawanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the karyawan
     */
    omit?: karyawanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: karyawanInclude<ExtArgs> | null
  }


  /**
   * Model reservasi
   */

  export type AggregateReservasi = {
    _count: ReservasiCountAggregateOutputType | null
    _avg: ReservasiAvgAggregateOutputType | null
    _sum: ReservasiSumAggregateOutputType | null
    _min: ReservasiMinAggregateOutputType | null
    _max: ReservasiMaxAggregateOutputType | null
  }

  export type ReservasiAvgAggregateOutputType = {
    id_reservasi: number | null
    id_tamu: number | null
    id_kamar: number | null
    id_karyawan: number | null
    total_bayar: Decimal | null
  }

  export type ReservasiSumAggregateOutputType = {
    id_reservasi: number | null
    id_tamu: number | null
    id_kamar: number | null
    id_karyawan: number | null
    total_bayar: Decimal | null
  }

  export type ReservasiMinAggregateOutputType = {
    id_reservasi: number | null
    id_tamu: number | null
    id_kamar: number | null
    id_karyawan: number | null
    tgl_reservasi: Date | null
    check_in: Date | null
    check_out: Date | null
    total_bayar: Decimal | null
    metode_pembayaran: $Enums.reservasi_metode_pembayaran | null
    status: $Enums.reservasi_status | null
  }

  export type ReservasiMaxAggregateOutputType = {
    id_reservasi: number | null
    id_tamu: number | null
    id_kamar: number | null
    id_karyawan: number | null
    tgl_reservasi: Date | null
    check_in: Date | null
    check_out: Date | null
    total_bayar: Decimal | null
    metode_pembayaran: $Enums.reservasi_metode_pembayaran | null
    status: $Enums.reservasi_status | null
  }

  export type ReservasiCountAggregateOutputType = {
    id_reservasi: number
    id_tamu: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: number
    check_in: number
    check_out: number
    total_bayar: number
    metode_pembayaran: number
    status: number
    _all: number
  }


  export type ReservasiAvgAggregateInputType = {
    id_reservasi?: true
    id_tamu?: true
    id_kamar?: true
    id_karyawan?: true
    total_bayar?: true
  }

  export type ReservasiSumAggregateInputType = {
    id_reservasi?: true
    id_tamu?: true
    id_kamar?: true
    id_karyawan?: true
    total_bayar?: true
  }

  export type ReservasiMinAggregateInputType = {
    id_reservasi?: true
    id_tamu?: true
    id_kamar?: true
    id_karyawan?: true
    tgl_reservasi?: true
    check_in?: true
    check_out?: true
    total_bayar?: true
    metode_pembayaran?: true
    status?: true
  }

  export type ReservasiMaxAggregateInputType = {
    id_reservasi?: true
    id_tamu?: true
    id_kamar?: true
    id_karyawan?: true
    tgl_reservasi?: true
    check_in?: true
    check_out?: true
    total_bayar?: true
    metode_pembayaran?: true
    status?: true
  }

  export type ReservasiCountAggregateInputType = {
    id_reservasi?: true
    id_tamu?: true
    id_kamar?: true
    id_karyawan?: true
    tgl_reservasi?: true
    check_in?: true
    check_out?: true
    total_bayar?: true
    metode_pembayaran?: true
    status?: true
    _all?: true
  }

  export type ReservasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservasi to aggregate.
     */
    where?: reservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservasis to fetch.
     */
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservasis
    **/
    _count?: true | ReservasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasiMaxAggregateInputType
  }

  export type GetReservasiAggregateType<T extends ReservasiAggregateArgs> = {
        [P in keyof T & keyof AggregateReservasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservasi[P]>
      : GetScalarType<T[P], AggregateReservasi[P]>
  }




  export type reservasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasiWhereInput
    orderBy?: reservasiOrderByWithAggregationInput | reservasiOrderByWithAggregationInput[]
    by: ReservasiScalarFieldEnum[] | ReservasiScalarFieldEnum
    having?: reservasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasiCountAggregateInputType | true
    _avg?: ReservasiAvgAggregateInputType
    _sum?: ReservasiSumAggregateInputType
    _min?: ReservasiMinAggregateInputType
    _max?: ReservasiMaxAggregateInputType
  }

  export type ReservasiGroupByOutputType = {
    id_reservasi: number
    id_tamu: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: Date
    check_in: Date
    check_out: Date
    total_bayar: Decimal
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status: $Enums.reservasi_status | null
    _count: ReservasiCountAggregateOutputType | null
    _avg: ReservasiAvgAggregateOutputType | null
    _sum: ReservasiSumAggregateOutputType | null
    _min: ReservasiMinAggregateOutputType | null
    _max: ReservasiMaxAggregateOutputType | null
  }

  type GetReservasiGroupByPayload<T extends reservasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasiGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasiGroupByOutputType[P]>
        }
      >
    >


  export type reservasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservasi?: boolean
    id_tamu?: boolean
    id_kamar?: boolean
    id_karyawan?: boolean
    tgl_reservasi?: boolean
    check_in?: boolean
    check_out?: boolean
    total_bayar?: boolean
    metode_pembayaran?: boolean
    status?: boolean
    tamu?: boolean | tamuDefaultArgs<ExtArgs>
    kamar?: boolean | kamarDefaultArgs<ExtArgs>
    karyawan?: boolean | karyawanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservasi"]>



  export type reservasiSelectScalar = {
    id_reservasi?: boolean
    id_tamu?: boolean
    id_kamar?: boolean
    id_karyawan?: boolean
    tgl_reservasi?: boolean
    check_in?: boolean
    check_out?: boolean
    total_bayar?: boolean
    metode_pembayaran?: boolean
    status?: boolean
  }

  export type reservasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reservasi" | "id_tamu" | "id_kamar" | "id_karyawan" | "tgl_reservasi" | "check_in" | "check_out" | "total_bayar" | "metode_pembayaran" | "status", ExtArgs["result"]["reservasi"]>
  export type reservasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tamu?: boolean | tamuDefaultArgs<ExtArgs>
    kamar?: boolean | kamarDefaultArgs<ExtArgs>
    karyawan?: boolean | karyawanDefaultArgs<ExtArgs>
  }

  export type $reservasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservasi"
    objects: {
      tamu: Prisma.$tamuPayload<ExtArgs>
      kamar: Prisma.$kamarPayload<ExtArgs>
      karyawan: Prisma.$karyawanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reservasi: number
      id_tamu: number
      id_kamar: number
      id_karyawan: number
      tgl_reservasi: Date
      check_in: Date
      check_out: Date
      total_bayar: Prisma.Decimal
      metode_pembayaran: $Enums.reservasi_metode_pembayaran
      status: $Enums.reservasi_status | null
    }, ExtArgs["result"]["reservasi"]>
    composites: {}
  }

  type reservasiGetPayload<S extends boolean | null | undefined | reservasiDefaultArgs> = $Result.GetResult<Prisma.$reservasiPayload, S>

  type reservasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasiCountAggregateInputType | true
    }

  export interface reservasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservasi'], meta: { name: 'reservasi' } }
    /**
     * Find zero or one Reservasi that matches the filter.
     * @param {reservasiFindUniqueArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasiFindUniqueArgs>(args: SelectSubset<T, reservasiFindUniqueArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasiFindUniqueOrThrowArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasiFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiFindFirstArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasiFindFirstArgs>(args?: SelectSubset<T, reservasiFindFirstArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiFindFirstOrThrowArgs} args - Arguments to find a Reservasi
     * @example
     * // Get one Reservasi
     * const reservasi = await prisma.reservasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasiFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservasis
     * const reservasis = await prisma.reservasi.findMany()
     * 
     * // Get first 10 Reservasis
     * const reservasis = await prisma.reservasi.findMany({ take: 10 })
     * 
     * // Only select the `id_reservasi`
     * const reservasiWithId_reservasiOnly = await prisma.reservasi.findMany({ select: { id_reservasi: true } })
     * 
     */
    findMany<T extends reservasiFindManyArgs>(args?: SelectSubset<T, reservasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservasi.
     * @param {reservasiCreateArgs} args - Arguments to create a Reservasi.
     * @example
     * // Create one Reservasi
     * const Reservasi = await prisma.reservasi.create({
     *   data: {
     *     // ... data to create a Reservasi
     *   }
     * })
     * 
     */
    create<T extends reservasiCreateArgs>(args: SelectSubset<T, reservasiCreateArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservasis.
     * @param {reservasiCreateManyArgs} args - Arguments to create many Reservasis.
     * @example
     * // Create many Reservasis
     * const reservasi = await prisma.reservasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasiCreateManyArgs>(args?: SelectSubset<T, reservasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservasi.
     * @param {reservasiDeleteArgs} args - Arguments to delete one Reservasi.
     * @example
     * // Delete one Reservasi
     * const Reservasi = await prisma.reservasi.delete({
     *   where: {
     *     // ... filter to delete one Reservasi
     *   }
     * })
     * 
     */
    delete<T extends reservasiDeleteArgs>(args: SelectSubset<T, reservasiDeleteArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservasi.
     * @param {reservasiUpdateArgs} args - Arguments to update one Reservasi.
     * @example
     * // Update one Reservasi
     * const reservasi = await prisma.reservasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasiUpdateArgs>(args: SelectSubset<T, reservasiUpdateArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservasis.
     * @param {reservasiDeleteManyArgs} args - Arguments to filter Reservasis to delete.
     * @example
     * // Delete a few Reservasis
     * const { count } = await prisma.reservasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasiDeleteManyArgs>(args?: SelectSubset<T, reservasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservasis
     * const reservasi = await prisma.reservasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasiUpdateManyArgs>(args: SelectSubset<T, reservasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservasi.
     * @param {reservasiUpsertArgs} args - Arguments to update or create a Reservasi.
     * @example
     * // Update or create a Reservasi
     * const reservasi = await prisma.reservasi.upsert({
     *   create: {
     *     // ... data to create a Reservasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservasi we want to update
     *   }
     * })
     */
    upsert<T extends reservasiUpsertArgs>(args: SelectSubset<T, reservasiUpsertArgs<ExtArgs>>): Prisma__reservasiClient<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiCountArgs} args - Arguments to filter Reservasis to count.
     * @example
     * // Count the number of Reservasis
     * const count = await prisma.reservasi.count({
     *   where: {
     *     // ... the filter for the Reservasis we want to count
     *   }
     * })
    **/
    count<T extends reservasiCountArgs>(
      args?: Subset<T, reservasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservasiAggregateArgs>(args: Subset<T, ReservasiAggregateArgs>): Prisma.PrismaPromise<GetReservasiAggregateType<T>>

    /**
     * Group by Reservasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends reservasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasiGroupByArgs['orderBy'] }
        : { orderBy?: reservasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, reservasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservasi model
   */
  readonly fields: reservasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tamu<T extends tamuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tamuDefaultArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kamar<T extends kamarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, kamarDefaultArgs<ExtArgs>>): Prisma__kamarClient<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    karyawan<T extends karyawanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, karyawanDefaultArgs<ExtArgs>>): Prisma__karyawanClient<$Result.GetResult<Prisma.$karyawanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the reservasi model
   */
  interface reservasiFieldRefs {
    readonly id_reservasi: FieldRef<"reservasi", 'Int'>
    readonly id_tamu: FieldRef<"reservasi", 'Int'>
    readonly id_kamar: FieldRef<"reservasi", 'Int'>
    readonly id_karyawan: FieldRef<"reservasi", 'Int'>
    readonly tgl_reservasi: FieldRef<"reservasi", 'DateTime'>
    readonly check_in: FieldRef<"reservasi", 'DateTime'>
    readonly check_out: FieldRef<"reservasi", 'DateTime'>
    readonly total_bayar: FieldRef<"reservasi", 'Decimal'>
    readonly metode_pembayaran: FieldRef<"reservasi", 'reservasi_metode_pembayaran'>
    readonly status: FieldRef<"reservasi", 'reservasi_status'>
  }
    

  // Custom InputTypes
  /**
   * reservasi findUnique
   */
  export type reservasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter, which reservasi to fetch.
     */
    where: reservasiWhereUniqueInput
  }

  /**
   * reservasi findUniqueOrThrow
   */
  export type reservasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter, which reservasi to fetch.
     */
    where: reservasiWhereUniqueInput
  }

  /**
   * reservasi findFirst
   */
  export type reservasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter, which reservasi to fetch.
     */
    where?: reservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservasis to fetch.
     */
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservasis.
     */
    cursor?: reservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservasis.
     */
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * reservasi findFirstOrThrow
   */
  export type reservasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter, which reservasi to fetch.
     */
    where?: reservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservasis to fetch.
     */
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservasis.
     */
    cursor?: reservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservasis.
     */
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * reservasi findMany
   */
  export type reservasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter, which reservasis to fetch.
     */
    where?: reservasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservasis to fetch.
     */
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservasis.
     */
    cursor?: reservasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservasis.
     */
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * reservasi create
   */
  export type reservasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * The data needed to create a reservasi.
     */
    data: XOR<reservasiCreateInput, reservasiUncheckedCreateInput>
  }

  /**
   * reservasi createMany
   */
  export type reservasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservasis.
     */
    data: reservasiCreateManyInput | reservasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservasi update
   */
  export type reservasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * The data needed to update a reservasi.
     */
    data: XOR<reservasiUpdateInput, reservasiUncheckedUpdateInput>
    /**
     * Choose, which reservasi to update.
     */
    where: reservasiWhereUniqueInput
  }

  /**
   * reservasi updateMany
   */
  export type reservasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservasis.
     */
    data: XOR<reservasiUpdateManyMutationInput, reservasiUncheckedUpdateManyInput>
    /**
     * Filter which reservasis to update
     */
    where?: reservasiWhereInput
    /**
     * Limit how many reservasis to update.
     */
    limit?: number
  }

  /**
   * reservasi upsert
   */
  export type reservasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * The filter to search for the reservasi to update in case it exists.
     */
    where: reservasiWhereUniqueInput
    /**
     * In case the reservasi found by the `where` argument doesn't exist, create a new reservasi with this data.
     */
    create: XOR<reservasiCreateInput, reservasiUncheckedCreateInput>
    /**
     * In case the reservasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasiUpdateInput, reservasiUncheckedUpdateInput>
  }

  /**
   * reservasi delete
   */
  export type reservasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    /**
     * Filter which reservasi to delete.
     */
    where: reservasiWhereUniqueInput
  }

  /**
   * reservasi deleteMany
   */
  export type reservasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservasis to delete
     */
    where?: reservasiWhereInput
    /**
     * Limit how many reservasis to delete.
     */
    limit?: number
  }

  /**
   * reservasi without action
   */
  export type reservasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
  }


  /**
   * Model tamu
   */

  export type AggregateTamu = {
    _count: TamuCountAggregateOutputType | null
    _avg: TamuAvgAggregateOutputType | null
    _sum: TamuSumAggregateOutputType | null
    _min: TamuMinAggregateOutputType | null
    _max: TamuMaxAggregateOutputType | null
  }

  export type TamuAvgAggregateOutputType = {
    id_tamu: number | null
  }

  export type TamuSumAggregateOutputType = {
    id_tamu: number | null
  }

  export type TamuMinAggregateOutputType = {
    id_tamu: number | null
    nama: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type TamuMaxAggregateOutputType = {
    id_tamu: number | null
    nama: string | null
    no_hp: string | null
    alamat: string | null
  }

  export type TamuCountAggregateOutputType = {
    id_tamu: number
    nama: number
    no_hp: number
    alamat: number
    _all: number
  }


  export type TamuAvgAggregateInputType = {
    id_tamu?: true
  }

  export type TamuSumAggregateInputType = {
    id_tamu?: true
  }

  export type TamuMinAggregateInputType = {
    id_tamu?: true
    nama?: true
    no_hp?: true
    alamat?: true
  }

  export type TamuMaxAggregateInputType = {
    id_tamu?: true
    nama?: true
    no_hp?: true
    alamat?: true
  }

  export type TamuCountAggregateInputType = {
    id_tamu?: true
    nama?: true
    no_hp?: true
    alamat?: true
    _all?: true
  }

  export type TamuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tamu to aggregate.
     */
    where?: tamuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tamus to fetch.
     */
    orderBy?: tamuOrderByWithRelationInput | tamuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tamuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tamus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tamus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tamus
    **/
    _count?: true | TamuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TamuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TamuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TamuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TamuMaxAggregateInputType
  }

  export type GetTamuAggregateType<T extends TamuAggregateArgs> = {
        [P in keyof T & keyof AggregateTamu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTamu[P]>
      : GetScalarType<T[P], AggregateTamu[P]>
  }




  export type tamuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tamuWhereInput
    orderBy?: tamuOrderByWithAggregationInput | tamuOrderByWithAggregationInput[]
    by: TamuScalarFieldEnum[] | TamuScalarFieldEnum
    having?: tamuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TamuCountAggregateInputType | true
    _avg?: TamuAvgAggregateInputType
    _sum?: TamuSumAggregateInputType
    _min?: TamuMinAggregateInputType
    _max?: TamuMaxAggregateInputType
  }

  export type TamuGroupByOutputType = {
    id_tamu: number
    nama: string
    no_hp: string
    alamat: string
    _count: TamuCountAggregateOutputType | null
    _avg: TamuAvgAggregateOutputType | null
    _sum: TamuSumAggregateOutputType | null
    _min: TamuMinAggregateOutputType | null
    _max: TamuMaxAggregateOutputType | null
  }

  type GetTamuGroupByPayload<T extends tamuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TamuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TamuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TamuGroupByOutputType[P]>
            : GetScalarType<T[P], TamuGroupByOutputType[P]>
        }
      >
    >


  export type tamuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tamu?: boolean
    nama?: boolean
    no_hp?: boolean
    alamat?: boolean
    reservasi?: boolean | tamu$reservasiArgs<ExtArgs>
    _count?: boolean | TamuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tamu"]>



  export type tamuSelectScalar = {
    id_tamu?: boolean
    nama?: boolean
    no_hp?: boolean
    alamat?: boolean
  }

  export type tamuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tamu" | "nama" | "no_hp" | "alamat", ExtArgs["result"]["tamu"]>
  export type tamuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservasi?: boolean | tamu$reservasiArgs<ExtArgs>
    _count?: boolean | TamuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tamuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tamu"
    objects: {
      reservasi: Prisma.$reservasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tamu: number
      nama: string
      no_hp: string
      alamat: string
    }, ExtArgs["result"]["tamu"]>
    composites: {}
  }

  type tamuGetPayload<S extends boolean | null | undefined | tamuDefaultArgs> = $Result.GetResult<Prisma.$tamuPayload, S>

  type tamuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tamuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TamuCountAggregateInputType | true
    }

  export interface tamuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tamu'], meta: { name: 'tamu' } }
    /**
     * Find zero or one Tamu that matches the filter.
     * @param {tamuFindUniqueArgs} args - Arguments to find a Tamu
     * @example
     * // Get one Tamu
     * const tamu = await prisma.tamu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tamuFindUniqueArgs>(args: SelectSubset<T, tamuFindUniqueArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tamu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tamuFindUniqueOrThrowArgs} args - Arguments to find a Tamu
     * @example
     * // Get one Tamu
     * const tamu = await prisma.tamu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tamuFindUniqueOrThrowArgs>(args: SelectSubset<T, tamuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tamu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuFindFirstArgs} args - Arguments to find a Tamu
     * @example
     * // Get one Tamu
     * const tamu = await prisma.tamu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tamuFindFirstArgs>(args?: SelectSubset<T, tamuFindFirstArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tamu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuFindFirstOrThrowArgs} args - Arguments to find a Tamu
     * @example
     * // Get one Tamu
     * const tamu = await prisma.tamu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tamuFindFirstOrThrowArgs>(args?: SelectSubset<T, tamuFindFirstOrThrowArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tamus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tamus
     * const tamus = await prisma.tamu.findMany()
     * 
     * // Get first 10 Tamus
     * const tamus = await prisma.tamu.findMany({ take: 10 })
     * 
     * // Only select the `id_tamu`
     * const tamuWithId_tamuOnly = await prisma.tamu.findMany({ select: { id_tamu: true } })
     * 
     */
    findMany<T extends tamuFindManyArgs>(args?: SelectSubset<T, tamuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tamu.
     * @param {tamuCreateArgs} args - Arguments to create a Tamu.
     * @example
     * // Create one Tamu
     * const Tamu = await prisma.tamu.create({
     *   data: {
     *     // ... data to create a Tamu
     *   }
     * })
     * 
     */
    create<T extends tamuCreateArgs>(args: SelectSubset<T, tamuCreateArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tamus.
     * @param {tamuCreateManyArgs} args - Arguments to create many Tamus.
     * @example
     * // Create many Tamus
     * const tamu = await prisma.tamu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tamuCreateManyArgs>(args?: SelectSubset<T, tamuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tamu.
     * @param {tamuDeleteArgs} args - Arguments to delete one Tamu.
     * @example
     * // Delete one Tamu
     * const Tamu = await prisma.tamu.delete({
     *   where: {
     *     // ... filter to delete one Tamu
     *   }
     * })
     * 
     */
    delete<T extends tamuDeleteArgs>(args: SelectSubset<T, tamuDeleteArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tamu.
     * @param {tamuUpdateArgs} args - Arguments to update one Tamu.
     * @example
     * // Update one Tamu
     * const tamu = await prisma.tamu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tamuUpdateArgs>(args: SelectSubset<T, tamuUpdateArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tamus.
     * @param {tamuDeleteManyArgs} args - Arguments to filter Tamus to delete.
     * @example
     * // Delete a few Tamus
     * const { count } = await prisma.tamu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tamuDeleteManyArgs>(args?: SelectSubset<T, tamuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tamus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tamus
     * const tamu = await prisma.tamu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tamuUpdateManyArgs>(args: SelectSubset<T, tamuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tamu.
     * @param {tamuUpsertArgs} args - Arguments to update or create a Tamu.
     * @example
     * // Update or create a Tamu
     * const tamu = await prisma.tamu.upsert({
     *   create: {
     *     // ... data to create a Tamu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tamu we want to update
     *   }
     * })
     */
    upsert<T extends tamuUpsertArgs>(args: SelectSubset<T, tamuUpsertArgs<ExtArgs>>): Prisma__tamuClient<$Result.GetResult<Prisma.$tamuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tamus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuCountArgs} args - Arguments to filter Tamus to count.
     * @example
     * // Count the number of Tamus
     * const count = await prisma.tamu.count({
     *   where: {
     *     // ... the filter for the Tamus we want to count
     *   }
     * })
    **/
    count<T extends tamuCountArgs>(
      args?: Subset<T, tamuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TamuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tamu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TamuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TamuAggregateArgs>(args: Subset<T, TamuAggregateArgs>): Prisma.PrismaPromise<GetTamuAggregateType<T>>

    /**
     * Group by Tamu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tamuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tamuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tamuGroupByArgs['orderBy'] }
        : { orderBy?: tamuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tamuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTamuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tamu model
   */
  readonly fields: tamuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tamu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tamuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservasi<T extends tamu$reservasiArgs<ExtArgs> = {}>(args?: Subset<T, tamu$reservasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tamu model
   */
  interface tamuFieldRefs {
    readonly id_tamu: FieldRef<"tamu", 'Int'>
    readonly nama: FieldRef<"tamu", 'String'>
    readonly no_hp: FieldRef<"tamu", 'String'>
    readonly alamat: FieldRef<"tamu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tamu findUnique
   */
  export type tamuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter, which tamu to fetch.
     */
    where: tamuWhereUniqueInput
  }

  /**
   * tamu findUniqueOrThrow
   */
  export type tamuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter, which tamu to fetch.
     */
    where: tamuWhereUniqueInput
  }

  /**
   * tamu findFirst
   */
  export type tamuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter, which tamu to fetch.
     */
    where?: tamuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tamus to fetch.
     */
    orderBy?: tamuOrderByWithRelationInput | tamuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tamus.
     */
    cursor?: tamuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tamus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tamus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tamus.
     */
    distinct?: TamuScalarFieldEnum | TamuScalarFieldEnum[]
  }

  /**
   * tamu findFirstOrThrow
   */
  export type tamuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter, which tamu to fetch.
     */
    where?: tamuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tamus to fetch.
     */
    orderBy?: tamuOrderByWithRelationInput | tamuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tamus.
     */
    cursor?: tamuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tamus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tamus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tamus.
     */
    distinct?: TamuScalarFieldEnum | TamuScalarFieldEnum[]
  }

  /**
   * tamu findMany
   */
  export type tamuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter, which tamus to fetch.
     */
    where?: tamuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tamus to fetch.
     */
    orderBy?: tamuOrderByWithRelationInput | tamuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tamus.
     */
    cursor?: tamuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tamus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tamus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tamus.
     */
    distinct?: TamuScalarFieldEnum | TamuScalarFieldEnum[]
  }

  /**
   * tamu create
   */
  export type tamuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * The data needed to create a tamu.
     */
    data: XOR<tamuCreateInput, tamuUncheckedCreateInput>
  }

  /**
   * tamu createMany
   */
  export type tamuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tamus.
     */
    data: tamuCreateManyInput | tamuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tamu update
   */
  export type tamuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * The data needed to update a tamu.
     */
    data: XOR<tamuUpdateInput, tamuUncheckedUpdateInput>
    /**
     * Choose, which tamu to update.
     */
    where: tamuWhereUniqueInput
  }

  /**
   * tamu updateMany
   */
  export type tamuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tamus.
     */
    data: XOR<tamuUpdateManyMutationInput, tamuUncheckedUpdateManyInput>
    /**
     * Filter which tamus to update
     */
    where?: tamuWhereInput
    /**
     * Limit how many tamus to update.
     */
    limit?: number
  }

  /**
   * tamu upsert
   */
  export type tamuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * The filter to search for the tamu to update in case it exists.
     */
    where: tamuWhereUniqueInput
    /**
     * In case the tamu found by the `where` argument doesn't exist, create a new tamu with this data.
     */
    create: XOR<tamuCreateInput, tamuUncheckedCreateInput>
    /**
     * In case the tamu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tamuUpdateInput, tamuUncheckedUpdateInput>
  }

  /**
   * tamu delete
   */
  export type tamuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
    /**
     * Filter which tamu to delete.
     */
    where: tamuWhereUniqueInput
  }

  /**
   * tamu deleteMany
   */
  export type tamuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tamus to delete
     */
    where?: tamuWhereInput
    /**
     * Limit how many tamus to delete.
     */
    limit?: number
  }

  /**
   * tamu.reservasi
   */
  export type tamu$reservasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservasi
     */
    select?: reservasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservasi
     */
    omit?: reservasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasiInclude<ExtArgs> | null
    where?: reservasiWhereInput
    orderBy?: reservasiOrderByWithRelationInput | reservasiOrderByWithRelationInput[]
    cursor?: reservasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasiScalarFieldEnum | ReservasiScalarFieldEnum[]
  }

  /**
   * tamu without action
   */
  export type tamuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tamu
     */
    select?: tamuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tamu
     */
    omit?: tamuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tamuInclude<ExtArgs> | null
  }


  /**
   * Model tipe_kamar
   */

  export type AggregateTipe_kamar = {
    _count: Tipe_kamarCountAggregateOutputType | null
    _avg: Tipe_kamarAvgAggregateOutputType | null
    _sum: Tipe_kamarSumAggregateOutputType | null
    _min: Tipe_kamarMinAggregateOutputType | null
    _max: Tipe_kamarMaxAggregateOutputType | null
  }

  export type Tipe_kamarAvgAggregateOutputType = {
    id_tipe_kamar: number | null
    harga: Decimal | null
  }

  export type Tipe_kamarSumAggregateOutputType = {
    id_tipe_kamar: number | null
    harga: Decimal | null
  }

  export type Tipe_kamarMinAggregateOutputType = {
    id_tipe_kamar: number | null
    nama_tipe: string | null
    harga: Decimal | null
    fasilitas: string | null
  }

  export type Tipe_kamarMaxAggregateOutputType = {
    id_tipe_kamar: number | null
    nama_tipe: string | null
    harga: Decimal | null
    fasilitas: string | null
  }

  export type Tipe_kamarCountAggregateOutputType = {
    id_tipe_kamar: number
    nama_tipe: number
    harga: number
    fasilitas: number
    _all: number
  }


  export type Tipe_kamarAvgAggregateInputType = {
    id_tipe_kamar?: true
    harga?: true
  }

  export type Tipe_kamarSumAggregateInputType = {
    id_tipe_kamar?: true
    harga?: true
  }

  export type Tipe_kamarMinAggregateInputType = {
    id_tipe_kamar?: true
    nama_tipe?: true
    harga?: true
    fasilitas?: true
  }

  export type Tipe_kamarMaxAggregateInputType = {
    id_tipe_kamar?: true
    nama_tipe?: true
    harga?: true
    fasilitas?: true
  }

  export type Tipe_kamarCountAggregateInputType = {
    id_tipe_kamar?: true
    nama_tipe?: true
    harga?: true
    fasilitas?: true
    _all?: true
  }

  export type Tipe_kamarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_kamar to aggregate.
     */
    where?: tipe_kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_kamars to fetch.
     */
    orderBy?: tipe_kamarOrderByWithRelationInput | tipe_kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipe_kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipe_kamars
    **/
    _count?: true | Tipe_kamarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipe_kamarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipe_kamarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipe_kamarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipe_kamarMaxAggregateInputType
  }

  export type GetTipe_kamarAggregateType<T extends Tipe_kamarAggregateArgs> = {
        [P in keyof T & keyof AggregateTipe_kamar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipe_kamar[P]>
      : GetScalarType<T[P], AggregateTipe_kamar[P]>
  }




  export type tipe_kamarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipe_kamarWhereInput
    orderBy?: tipe_kamarOrderByWithAggregationInput | tipe_kamarOrderByWithAggregationInput[]
    by: Tipe_kamarScalarFieldEnum[] | Tipe_kamarScalarFieldEnum
    having?: tipe_kamarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipe_kamarCountAggregateInputType | true
    _avg?: Tipe_kamarAvgAggregateInputType
    _sum?: Tipe_kamarSumAggregateInputType
    _min?: Tipe_kamarMinAggregateInputType
    _max?: Tipe_kamarMaxAggregateInputType
  }

  export type Tipe_kamarGroupByOutputType = {
    id_tipe_kamar: number
    nama_tipe: string
    harga: Decimal
    fasilitas: string
    _count: Tipe_kamarCountAggregateOutputType | null
    _avg: Tipe_kamarAvgAggregateOutputType | null
    _sum: Tipe_kamarSumAggregateOutputType | null
    _min: Tipe_kamarMinAggregateOutputType | null
    _max: Tipe_kamarMaxAggregateOutputType | null
  }

  type GetTipe_kamarGroupByPayload<T extends tipe_kamarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipe_kamarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipe_kamarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipe_kamarGroupByOutputType[P]>
            : GetScalarType<T[P], Tipe_kamarGroupByOutputType[P]>
        }
      >
    >


  export type tipe_kamarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_tipe_kamar?: boolean
    nama_tipe?: boolean
    harga?: boolean
    fasilitas?: boolean
    kamar?: boolean | tipe_kamar$kamarArgs<ExtArgs>
    _count?: boolean | Tipe_kamarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipe_kamar"]>



  export type tipe_kamarSelectScalar = {
    id_tipe_kamar?: boolean
    nama_tipe?: boolean
    harga?: boolean
    fasilitas?: boolean
  }

  export type tipe_kamarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_tipe_kamar" | "nama_tipe" | "harga" | "fasilitas", ExtArgs["result"]["tipe_kamar"]>
  export type tipe_kamarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kamar?: boolean | tipe_kamar$kamarArgs<ExtArgs>
    _count?: boolean | Tipe_kamarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tipe_kamarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipe_kamar"
    objects: {
      kamar: Prisma.$kamarPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_tipe_kamar: number
      nama_tipe: string
      harga: Prisma.Decimal
      fasilitas: string
    }, ExtArgs["result"]["tipe_kamar"]>
    composites: {}
  }

  type tipe_kamarGetPayload<S extends boolean | null | undefined | tipe_kamarDefaultArgs> = $Result.GetResult<Prisma.$tipe_kamarPayload, S>

  type tipe_kamarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipe_kamarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipe_kamarCountAggregateInputType | true
    }

  export interface tipe_kamarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipe_kamar'], meta: { name: 'tipe_kamar' } }
    /**
     * Find zero or one Tipe_kamar that matches the filter.
     * @param {tipe_kamarFindUniqueArgs} args - Arguments to find a Tipe_kamar
     * @example
     * // Get one Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipe_kamarFindUniqueArgs>(args: SelectSubset<T, tipe_kamarFindUniqueArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipe_kamar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipe_kamarFindUniqueOrThrowArgs} args - Arguments to find a Tipe_kamar
     * @example
     * // Get one Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipe_kamarFindUniqueOrThrowArgs>(args: SelectSubset<T, tipe_kamarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_kamar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarFindFirstArgs} args - Arguments to find a Tipe_kamar
     * @example
     * // Get one Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipe_kamarFindFirstArgs>(args?: SelectSubset<T, tipe_kamarFindFirstArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_kamar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarFindFirstOrThrowArgs} args - Arguments to find a Tipe_kamar
     * @example
     * // Get one Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipe_kamarFindFirstOrThrowArgs>(args?: SelectSubset<T, tipe_kamarFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipe_kamars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipe_kamars
     * const tipe_kamars = await prisma.tipe_kamar.findMany()
     * 
     * // Get first 10 Tipe_kamars
     * const tipe_kamars = await prisma.tipe_kamar.findMany({ take: 10 })
     * 
     * // Only select the `id_tipe_kamar`
     * const tipe_kamarWithId_tipe_kamarOnly = await prisma.tipe_kamar.findMany({ select: { id_tipe_kamar: true } })
     * 
     */
    findMany<T extends tipe_kamarFindManyArgs>(args?: SelectSubset<T, tipe_kamarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipe_kamar.
     * @param {tipe_kamarCreateArgs} args - Arguments to create a Tipe_kamar.
     * @example
     * // Create one Tipe_kamar
     * const Tipe_kamar = await prisma.tipe_kamar.create({
     *   data: {
     *     // ... data to create a Tipe_kamar
     *   }
     * })
     * 
     */
    create<T extends tipe_kamarCreateArgs>(args: SelectSubset<T, tipe_kamarCreateArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipe_kamars.
     * @param {tipe_kamarCreateManyArgs} args - Arguments to create many Tipe_kamars.
     * @example
     * // Create many Tipe_kamars
     * const tipe_kamar = await prisma.tipe_kamar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipe_kamarCreateManyArgs>(args?: SelectSubset<T, tipe_kamarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tipe_kamar.
     * @param {tipe_kamarDeleteArgs} args - Arguments to delete one Tipe_kamar.
     * @example
     * // Delete one Tipe_kamar
     * const Tipe_kamar = await prisma.tipe_kamar.delete({
     *   where: {
     *     // ... filter to delete one Tipe_kamar
     *   }
     * })
     * 
     */
    delete<T extends tipe_kamarDeleteArgs>(args: SelectSubset<T, tipe_kamarDeleteArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipe_kamar.
     * @param {tipe_kamarUpdateArgs} args - Arguments to update one Tipe_kamar.
     * @example
     * // Update one Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipe_kamarUpdateArgs>(args: SelectSubset<T, tipe_kamarUpdateArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipe_kamars.
     * @param {tipe_kamarDeleteManyArgs} args - Arguments to filter Tipe_kamars to delete.
     * @example
     * // Delete a few Tipe_kamars
     * const { count } = await prisma.tipe_kamar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipe_kamarDeleteManyArgs>(args?: SelectSubset<T, tipe_kamarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipe_kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipe_kamars
     * const tipe_kamar = await prisma.tipe_kamar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipe_kamarUpdateManyArgs>(args: SelectSubset<T, tipe_kamarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tipe_kamar.
     * @param {tipe_kamarUpsertArgs} args - Arguments to update or create a Tipe_kamar.
     * @example
     * // Update or create a Tipe_kamar
     * const tipe_kamar = await prisma.tipe_kamar.upsert({
     *   create: {
     *     // ... data to create a Tipe_kamar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipe_kamar we want to update
     *   }
     * })
     */
    upsert<T extends tipe_kamarUpsertArgs>(args: SelectSubset<T, tipe_kamarUpsertArgs<ExtArgs>>): Prisma__tipe_kamarClient<$Result.GetResult<Prisma.$tipe_kamarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipe_kamars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarCountArgs} args - Arguments to filter Tipe_kamars to count.
     * @example
     * // Count the number of Tipe_kamars
     * const count = await prisma.tipe_kamar.count({
     *   where: {
     *     // ... the filter for the Tipe_kamars we want to count
     *   }
     * })
    **/
    count<T extends tipe_kamarCountArgs>(
      args?: Subset<T, tipe_kamarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipe_kamarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipe_kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipe_kamarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipe_kamarAggregateArgs>(args: Subset<T, Tipe_kamarAggregateArgs>): Prisma.PrismaPromise<GetTipe_kamarAggregateType<T>>

    /**
     * Group by Tipe_kamar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_kamarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipe_kamarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipe_kamarGroupByArgs['orderBy'] }
        : { orderBy?: tipe_kamarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipe_kamarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipe_kamarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipe_kamar model
   */
  readonly fields: tipe_kamarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipe_kamar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipe_kamarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kamar<T extends tipe_kamar$kamarArgs<ExtArgs> = {}>(args?: Subset<T, tipe_kamar$kamarArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kamarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipe_kamar model
   */
  interface tipe_kamarFieldRefs {
    readonly id_tipe_kamar: FieldRef<"tipe_kamar", 'Int'>
    readonly nama_tipe: FieldRef<"tipe_kamar", 'String'>
    readonly harga: FieldRef<"tipe_kamar", 'Decimal'>
    readonly fasilitas: FieldRef<"tipe_kamar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tipe_kamar findUnique
   */
  export type tipe_kamarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter, which tipe_kamar to fetch.
     */
    where: tipe_kamarWhereUniqueInput
  }

  /**
   * tipe_kamar findUniqueOrThrow
   */
  export type tipe_kamarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter, which tipe_kamar to fetch.
     */
    where: tipe_kamarWhereUniqueInput
  }

  /**
   * tipe_kamar findFirst
   */
  export type tipe_kamarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter, which tipe_kamar to fetch.
     */
    where?: tipe_kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_kamars to fetch.
     */
    orderBy?: tipe_kamarOrderByWithRelationInput | tipe_kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_kamars.
     */
    cursor?: tipe_kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_kamars.
     */
    distinct?: Tipe_kamarScalarFieldEnum | Tipe_kamarScalarFieldEnum[]
  }

  /**
   * tipe_kamar findFirstOrThrow
   */
  export type tipe_kamarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter, which tipe_kamar to fetch.
     */
    where?: tipe_kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_kamars to fetch.
     */
    orderBy?: tipe_kamarOrderByWithRelationInput | tipe_kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_kamars.
     */
    cursor?: tipe_kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_kamars.
     */
    distinct?: Tipe_kamarScalarFieldEnum | Tipe_kamarScalarFieldEnum[]
  }

  /**
   * tipe_kamar findMany
   */
  export type tipe_kamarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter, which tipe_kamars to fetch.
     */
    where?: tipe_kamarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_kamars to fetch.
     */
    orderBy?: tipe_kamarOrderByWithRelationInput | tipe_kamarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipe_kamars.
     */
    cursor?: tipe_kamarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_kamars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_kamars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_kamars.
     */
    distinct?: Tipe_kamarScalarFieldEnum | Tipe_kamarScalarFieldEnum[]
  }

  /**
   * tipe_kamar create
   */
  export type tipe_kamarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * The data needed to create a tipe_kamar.
     */
    data: XOR<tipe_kamarCreateInput, tipe_kamarUncheckedCreateInput>
  }

  /**
   * tipe_kamar createMany
   */
  export type tipe_kamarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipe_kamars.
     */
    data: tipe_kamarCreateManyInput | tipe_kamarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipe_kamar update
   */
  export type tipe_kamarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * The data needed to update a tipe_kamar.
     */
    data: XOR<tipe_kamarUpdateInput, tipe_kamarUncheckedUpdateInput>
    /**
     * Choose, which tipe_kamar to update.
     */
    where: tipe_kamarWhereUniqueInput
  }

  /**
   * tipe_kamar updateMany
   */
  export type tipe_kamarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipe_kamars.
     */
    data: XOR<tipe_kamarUpdateManyMutationInput, tipe_kamarUncheckedUpdateManyInput>
    /**
     * Filter which tipe_kamars to update
     */
    where?: tipe_kamarWhereInput
    /**
     * Limit how many tipe_kamars to update.
     */
    limit?: number
  }

  /**
   * tipe_kamar upsert
   */
  export type tipe_kamarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * The filter to search for the tipe_kamar to update in case it exists.
     */
    where: tipe_kamarWhereUniqueInput
    /**
     * In case the tipe_kamar found by the `where` argument doesn't exist, create a new tipe_kamar with this data.
     */
    create: XOR<tipe_kamarCreateInput, tipe_kamarUncheckedCreateInput>
    /**
     * In case the tipe_kamar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipe_kamarUpdateInput, tipe_kamarUncheckedUpdateInput>
  }

  /**
   * tipe_kamar delete
   */
  export type tipe_kamarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
    /**
     * Filter which tipe_kamar to delete.
     */
    where: tipe_kamarWhereUniqueInput
  }

  /**
   * tipe_kamar deleteMany
   */
  export type tipe_kamarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_kamars to delete
     */
    where?: tipe_kamarWhereInput
    /**
     * Limit how many tipe_kamars to delete.
     */
    limit?: number
  }

  /**
   * tipe_kamar.kamar
   */
  export type tipe_kamar$kamarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kamar
     */
    select?: kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kamar
     */
    omit?: kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: kamarInclude<ExtArgs> | null
    where?: kamarWhereInput
    orderBy?: kamarOrderByWithRelationInput | kamarOrderByWithRelationInput[]
    cursor?: kamarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KamarScalarFieldEnum | KamarScalarFieldEnum[]
  }

  /**
   * tipe_kamar without action
   */
  export type tipe_kamarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_kamar
     */
    select?: tipe_kamarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_kamar
     */
    omit?: tipe_kamarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tipe_kamarInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const KamarScalarFieldEnum: {
    id_kamar: 'id_kamar',
    id_tipe_kamar: 'id_tipe_kamar',
    nomor_kamar: 'nomor_kamar',
    status: 'status'
  };

  export type KamarScalarFieldEnum = (typeof KamarScalarFieldEnum)[keyof typeof KamarScalarFieldEnum]


  export const KaryawanScalarFieldEnum: {
    id_karyawan: 'id_karyawan',
    nama_karyawan: 'nama_karyawan',
    username: 'username',
    email: 'email',
    password: 'password',
    no_hp_karyawan: 'no_hp_karyawan',
    role: 'role'
  };

  export type KaryawanScalarFieldEnum = (typeof KaryawanScalarFieldEnum)[keyof typeof KaryawanScalarFieldEnum]


  export const ReservasiScalarFieldEnum: {
    id_reservasi: 'id_reservasi',
    id_tamu: 'id_tamu',
    id_kamar: 'id_kamar',
    id_karyawan: 'id_karyawan',
    tgl_reservasi: 'tgl_reservasi',
    check_in: 'check_in',
    check_out: 'check_out',
    total_bayar: 'total_bayar',
    metode_pembayaran: 'metode_pembayaran',
    status: 'status'
  };

  export type ReservasiScalarFieldEnum = (typeof ReservasiScalarFieldEnum)[keyof typeof ReservasiScalarFieldEnum]


  export const TamuScalarFieldEnum: {
    id_tamu: 'id_tamu',
    nama: 'nama',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type TamuScalarFieldEnum = (typeof TamuScalarFieldEnum)[keyof typeof TamuScalarFieldEnum]


  export const Tipe_kamarScalarFieldEnum: {
    id_tipe_kamar: 'id_tipe_kamar',
    nama_tipe: 'nama_tipe',
    harga: 'harga',
    fasilitas: 'fasilitas'
  };

  export type Tipe_kamarScalarFieldEnum = (typeof Tipe_kamarScalarFieldEnum)[keyof typeof Tipe_kamarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const kamarOrderByRelevanceFieldEnum: {
    nomor_kamar: 'nomor_kamar'
  };

  export type kamarOrderByRelevanceFieldEnum = (typeof kamarOrderByRelevanceFieldEnum)[keyof typeof kamarOrderByRelevanceFieldEnum]


  export const karyawanOrderByRelevanceFieldEnum: {
    nama_karyawan: 'nama_karyawan',
    username: 'username',
    email: 'email',
    password: 'password',
    no_hp_karyawan: 'no_hp_karyawan'
  };

  export type karyawanOrderByRelevanceFieldEnum = (typeof karyawanOrderByRelevanceFieldEnum)[keyof typeof karyawanOrderByRelevanceFieldEnum]


  export const tamuOrderByRelevanceFieldEnum: {
    nama: 'nama',
    no_hp: 'no_hp',
    alamat: 'alamat'
  };

  export type tamuOrderByRelevanceFieldEnum = (typeof tamuOrderByRelevanceFieldEnum)[keyof typeof tamuOrderByRelevanceFieldEnum]


  export const tipe_kamarOrderByRelevanceFieldEnum: {
    nama_tipe: 'nama_tipe',
    fasilitas: 'fasilitas'
  };

  export type tipe_kamarOrderByRelevanceFieldEnum = (typeof tipe_kamarOrderByRelevanceFieldEnum)[keyof typeof tipe_kamarOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'kamar_status'
   */
  export type Enumkamar_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kamar_status'>
    


  /**
   * Reference to a field of type 'karyawan_role'
   */
  export type Enumkaryawan_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'karyawan_role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'reservasi_metode_pembayaran'
   */
  export type Enumreservasi_metode_pembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservasi_metode_pembayaran'>
    


  /**
   * Reference to a field of type 'reservasi_status'
   */
  export type Enumreservasi_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reservasi_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type kamarWhereInput = {
    AND?: kamarWhereInput | kamarWhereInput[]
    OR?: kamarWhereInput[]
    NOT?: kamarWhereInput | kamarWhereInput[]
    id_kamar?: IntFilter<"kamar"> | number
    id_tipe_kamar?: IntFilter<"kamar"> | number
    nomor_kamar?: StringFilter<"kamar"> | string
    status?: Enumkamar_statusNullableFilter<"kamar"> | $Enums.kamar_status | null
    tipe_kamar?: XOR<Tipe_kamarScalarRelationFilter, tipe_kamarWhereInput>
    reservasi?: ReservasiListRelationFilter
  }

  export type kamarOrderByWithRelationInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
    nomor_kamar?: SortOrder
    status?: SortOrderInput | SortOrder
    tipe_kamar?: tipe_kamarOrderByWithRelationInput
    reservasi?: reservasiOrderByRelationAggregateInput
    _relevance?: kamarOrderByRelevanceInput
  }

  export type kamarWhereUniqueInput = Prisma.AtLeast<{
    id_kamar?: number
    AND?: kamarWhereInput | kamarWhereInput[]
    OR?: kamarWhereInput[]
    NOT?: kamarWhereInput | kamarWhereInput[]
    id_tipe_kamar?: IntFilter<"kamar"> | number
    nomor_kamar?: StringFilter<"kamar"> | string
    status?: Enumkamar_statusNullableFilter<"kamar"> | $Enums.kamar_status | null
    tipe_kamar?: XOR<Tipe_kamarScalarRelationFilter, tipe_kamarWhereInput>
    reservasi?: ReservasiListRelationFilter
  }, "id_kamar">

  export type kamarOrderByWithAggregationInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
    nomor_kamar?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: kamarCountOrderByAggregateInput
    _avg?: kamarAvgOrderByAggregateInput
    _max?: kamarMaxOrderByAggregateInput
    _min?: kamarMinOrderByAggregateInput
    _sum?: kamarSumOrderByAggregateInput
  }

  export type kamarScalarWhereWithAggregatesInput = {
    AND?: kamarScalarWhereWithAggregatesInput | kamarScalarWhereWithAggregatesInput[]
    OR?: kamarScalarWhereWithAggregatesInput[]
    NOT?: kamarScalarWhereWithAggregatesInput | kamarScalarWhereWithAggregatesInput[]
    id_kamar?: IntWithAggregatesFilter<"kamar"> | number
    id_tipe_kamar?: IntWithAggregatesFilter<"kamar"> | number
    nomor_kamar?: StringWithAggregatesFilter<"kamar"> | string
    status?: Enumkamar_statusNullableWithAggregatesFilter<"kamar"> | $Enums.kamar_status | null
  }

  export type karyawanWhereInput = {
    AND?: karyawanWhereInput | karyawanWhereInput[]
    OR?: karyawanWhereInput[]
    NOT?: karyawanWhereInput | karyawanWhereInput[]
    id_karyawan?: IntFilter<"karyawan"> | number
    nama_karyawan?: StringFilter<"karyawan"> | string
    username?: StringFilter<"karyawan"> | string
    email?: StringFilter<"karyawan"> | string
    password?: StringFilter<"karyawan"> | string
    no_hp_karyawan?: StringFilter<"karyawan"> | string
    role?: Enumkaryawan_roleNullableFilter<"karyawan"> | $Enums.karyawan_role | null
    reservasi?: ReservasiListRelationFilter
  }

  export type karyawanOrderByWithRelationInput = {
    id_karyawan?: SortOrder
    nama_karyawan?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp_karyawan?: SortOrder
    role?: SortOrderInput | SortOrder
    reservasi?: reservasiOrderByRelationAggregateInput
    _relevance?: karyawanOrderByRelevanceInput
  }

  export type karyawanWhereUniqueInput = Prisma.AtLeast<{
    id_karyawan?: number
    username?: string
    AND?: karyawanWhereInput | karyawanWhereInput[]
    OR?: karyawanWhereInput[]
    NOT?: karyawanWhereInput | karyawanWhereInput[]
    nama_karyawan?: StringFilter<"karyawan"> | string
    email?: StringFilter<"karyawan"> | string
    password?: StringFilter<"karyawan"> | string
    no_hp_karyawan?: StringFilter<"karyawan"> | string
    role?: Enumkaryawan_roleNullableFilter<"karyawan"> | $Enums.karyawan_role | null
    reservasi?: ReservasiListRelationFilter
  }, "id_karyawan" | "username">

  export type karyawanOrderByWithAggregationInput = {
    id_karyawan?: SortOrder
    nama_karyawan?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp_karyawan?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: karyawanCountOrderByAggregateInput
    _avg?: karyawanAvgOrderByAggregateInput
    _max?: karyawanMaxOrderByAggregateInput
    _min?: karyawanMinOrderByAggregateInput
    _sum?: karyawanSumOrderByAggregateInput
  }

  export type karyawanScalarWhereWithAggregatesInput = {
    AND?: karyawanScalarWhereWithAggregatesInput | karyawanScalarWhereWithAggregatesInput[]
    OR?: karyawanScalarWhereWithAggregatesInput[]
    NOT?: karyawanScalarWhereWithAggregatesInput | karyawanScalarWhereWithAggregatesInput[]
    id_karyawan?: IntWithAggregatesFilter<"karyawan"> | number
    nama_karyawan?: StringWithAggregatesFilter<"karyawan"> | string
    username?: StringWithAggregatesFilter<"karyawan"> | string
    email?: StringWithAggregatesFilter<"karyawan"> | string
    password?: StringWithAggregatesFilter<"karyawan"> | string
    no_hp_karyawan?: StringWithAggregatesFilter<"karyawan"> | string
    role?: Enumkaryawan_roleNullableWithAggregatesFilter<"karyawan"> | $Enums.karyawan_role | null
  }

  export type reservasiWhereInput = {
    AND?: reservasiWhereInput | reservasiWhereInput[]
    OR?: reservasiWhereInput[]
    NOT?: reservasiWhereInput | reservasiWhereInput[]
    id_reservasi?: IntFilter<"reservasi"> | number
    id_tamu?: IntFilter<"reservasi"> | number
    id_kamar?: IntFilter<"reservasi"> | number
    id_karyawan?: IntFilter<"reservasi"> | number
    tgl_reservasi?: DateTimeFilter<"reservasi"> | Date | string
    check_in?: DateTimeFilter<"reservasi"> | Date | string
    check_out?: DateTimeFilter<"reservasi"> | Date | string
    total_bayar?: DecimalFilter<"reservasi"> | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFilter<"reservasi"> | $Enums.reservasi_metode_pembayaran
    status?: Enumreservasi_statusNullableFilter<"reservasi"> | $Enums.reservasi_status | null
    tamu?: XOR<TamuScalarRelationFilter, tamuWhereInput>
    kamar?: XOR<KamarScalarRelationFilter, kamarWhereInput>
    karyawan?: XOR<KaryawanScalarRelationFilter, karyawanWhereInput>
  }

  export type reservasiOrderByWithRelationInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    tgl_reservasi?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    total_bayar?: SortOrder
    metode_pembayaran?: SortOrder
    status?: SortOrderInput | SortOrder
    tamu?: tamuOrderByWithRelationInput
    kamar?: kamarOrderByWithRelationInput
    karyawan?: karyawanOrderByWithRelationInput
  }

  export type reservasiWhereUniqueInput = Prisma.AtLeast<{
    id_reservasi?: number
    AND?: reservasiWhereInput | reservasiWhereInput[]
    OR?: reservasiWhereInput[]
    NOT?: reservasiWhereInput | reservasiWhereInput[]
    id_tamu?: IntFilter<"reservasi"> | number
    id_kamar?: IntFilter<"reservasi"> | number
    id_karyawan?: IntFilter<"reservasi"> | number
    tgl_reservasi?: DateTimeFilter<"reservasi"> | Date | string
    check_in?: DateTimeFilter<"reservasi"> | Date | string
    check_out?: DateTimeFilter<"reservasi"> | Date | string
    total_bayar?: DecimalFilter<"reservasi"> | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFilter<"reservasi"> | $Enums.reservasi_metode_pembayaran
    status?: Enumreservasi_statusNullableFilter<"reservasi"> | $Enums.reservasi_status | null
    tamu?: XOR<TamuScalarRelationFilter, tamuWhereInput>
    kamar?: XOR<KamarScalarRelationFilter, kamarWhereInput>
    karyawan?: XOR<KaryawanScalarRelationFilter, karyawanWhereInput>
  }, "id_reservasi">

  export type reservasiOrderByWithAggregationInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    tgl_reservasi?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    total_bayar?: SortOrder
    metode_pembayaran?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: reservasiCountOrderByAggregateInput
    _avg?: reservasiAvgOrderByAggregateInput
    _max?: reservasiMaxOrderByAggregateInput
    _min?: reservasiMinOrderByAggregateInput
    _sum?: reservasiSumOrderByAggregateInput
  }

  export type reservasiScalarWhereWithAggregatesInput = {
    AND?: reservasiScalarWhereWithAggregatesInput | reservasiScalarWhereWithAggregatesInput[]
    OR?: reservasiScalarWhereWithAggregatesInput[]
    NOT?: reservasiScalarWhereWithAggregatesInput | reservasiScalarWhereWithAggregatesInput[]
    id_reservasi?: IntWithAggregatesFilter<"reservasi"> | number
    id_tamu?: IntWithAggregatesFilter<"reservasi"> | number
    id_kamar?: IntWithAggregatesFilter<"reservasi"> | number
    id_karyawan?: IntWithAggregatesFilter<"reservasi"> | number
    tgl_reservasi?: DateTimeWithAggregatesFilter<"reservasi"> | Date | string
    check_in?: DateTimeWithAggregatesFilter<"reservasi"> | Date | string
    check_out?: DateTimeWithAggregatesFilter<"reservasi"> | Date | string
    total_bayar?: DecimalWithAggregatesFilter<"reservasi"> | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranWithAggregatesFilter<"reservasi"> | $Enums.reservasi_metode_pembayaran
    status?: Enumreservasi_statusNullableWithAggregatesFilter<"reservasi"> | $Enums.reservasi_status | null
  }

  export type tamuWhereInput = {
    AND?: tamuWhereInput | tamuWhereInput[]
    OR?: tamuWhereInput[]
    NOT?: tamuWhereInput | tamuWhereInput[]
    id_tamu?: IntFilter<"tamu"> | number
    nama?: StringFilter<"tamu"> | string
    no_hp?: StringFilter<"tamu"> | string
    alamat?: StringFilter<"tamu"> | string
    reservasi?: ReservasiListRelationFilter
  }

  export type tamuOrderByWithRelationInput = {
    id_tamu?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    reservasi?: reservasiOrderByRelationAggregateInput
    _relevance?: tamuOrderByRelevanceInput
  }

  export type tamuWhereUniqueInput = Prisma.AtLeast<{
    id_tamu?: number
    AND?: tamuWhereInput | tamuWhereInput[]
    OR?: tamuWhereInput[]
    NOT?: tamuWhereInput | tamuWhereInput[]
    nama?: StringFilter<"tamu"> | string
    no_hp?: StringFilter<"tamu"> | string
    alamat?: StringFilter<"tamu"> | string
    reservasi?: ReservasiListRelationFilter
  }, "id_tamu">

  export type tamuOrderByWithAggregationInput = {
    id_tamu?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
    _count?: tamuCountOrderByAggregateInput
    _avg?: tamuAvgOrderByAggregateInput
    _max?: tamuMaxOrderByAggregateInput
    _min?: tamuMinOrderByAggregateInput
    _sum?: tamuSumOrderByAggregateInput
  }

  export type tamuScalarWhereWithAggregatesInput = {
    AND?: tamuScalarWhereWithAggregatesInput | tamuScalarWhereWithAggregatesInput[]
    OR?: tamuScalarWhereWithAggregatesInput[]
    NOT?: tamuScalarWhereWithAggregatesInput | tamuScalarWhereWithAggregatesInput[]
    id_tamu?: IntWithAggregatesFilter<"tamu"> | number
    nama?: StringWithAggregatesFilter<"tamu"> | string
    no_hp?: StringWithAggregatesFilter<"tamu"> | string
    alamat?: StringWithAggregatesFilter<"tamu"> | string
  }

  export type tipe_kamarWhereInput = {
    AND?: tipe_kamarWhereInput | tipe_kamarWhereInput[]
    OR?: tipe_kamarWhereInput[]
    NOT?: tipe_kamarWhereInput | tipe_kamarWhereInput[]
    id_tipe_kamar?: IntFilter<"tipe_kamar"> | number
    nama_tipe?: StringFilter<"tipe_kamar"> | string
    harga?: DecimalFilter<"tipe_kamar"> | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFilter<"tipe_kamar"> | string
    kamar?: KamarListRelationFilter
  }

  export type tipe_kamarOrderByWithRelationInput = {
    id_tipe_kamar?: SortOrder
    nama_tipe?: SortOrder
    harga?: SortOrder
    fasilitas?: SortOrder
    kamar?: kamarOrderByRelationAggregateInput
    _relevance?: tipe_kamarOrderByRelevanceInput
  }

  export type tipe_kamarWhereUniqueInput = Prisma.AtLeast<{
    id_tipe_kamar?: number
    AND?: tipe_kamarWhereInput | tipe_kamarWhereInput[]
    OR?: tipe_kamarWhereInput[]
    NOT?: tipe_kamarWhereInput | tipe_kamarWhereInput[]
    nama_tipe?: StringFilter<"tipe_kamar"> | string
    harga?: DecimalFilter<"tipe_kamar"> | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFilter<"tipe_kamar"> | string
    kamar?: KamarListRelationFilter
  }, "id_tipe_kamar">

  export type tipe_kamarOrderByWithAggregationInput = {
    id_tipe_kamar?: SortOrder
    nama_tipe?: SortOrder
    harga?: SortOrder
    fasilitas?: SortOrder
    _count?: tipe_kamarCountOrderByAggregateInput
    _avg?: tipe_kamarAvgOrderByAggregateInput
    _max?: tipe_kamarMaxOrderByAggregateInput
    _min?: tipe_kamarMinOrderByAggregateInput
    _sum?: tipe_kamarSumOrderByAggregateInput
  }

  export type tipe_kamarScalarWhereWithAggregatesInput = {
    AND?: tipe_kamarScalarWhereWithAggregatesInput | tipe_kamarScalarWhereWithAggregatesInput[]
    OR?: tipe_kamarScalarWhereWithAggregatesInput[]
    NOT?: tipe_kamarScalarWhereWithAggregatesInput | tipe_kamarScalarWhereWithAggregatesInput[]
    id_tipe_kamar?: IntWithAggregatesFilter<"tipe_kamar"> | number
    nama_tipe?: StringWithAggregatesFilter<"tipe_kamar"> | string
    harga?: DecimalWithAggregatesFilter<"tipe_kamar"> | Decimal | DecimalJsLike | number | string
    fasilitas?: StringWithAggregatesFilter<"tipe_kamar"> | string
  }

  export type kamarCreateInput = {
    nomor_kamar: string
    status?: $Enums.kamar_status | null
    tipe_kamar: tipe_kamarCreateNestedOneWithoutKamarInput
    reservasi?: reservasiCreateNestedManyWithoutKamarInput
  }

  export type kamarUncheckedCreateInput = {
    id_kamar?: number
    id_tipe_kamar: number
    nomor_kamar: string
    status?: $Enums.kamar_status | null
    reservasi?: reservasiUncheckedCreateNestedManyWithoutKamarInput
  }

  export type kamarUpdateInput = {
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
    tipe_kamar?: tipe_kamarUpdateOneRequiredWithoutKamarNestedInput
    reservasi?: reservasiUpdateManyWithoutKamarNestedInput
  }

  export type kamarUncheckedUpdateInput = {
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
    reservasi?: reservasiUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type kamarCreateManyInput = {
    id_kamar?: number
    id_tipe_kamar: number
    nomor_kamar: string
    status?: $Enums.kamar_status | null
  }

  export type kamarUpdateManyMutationInput = {
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
  }

  export type kamarUncheckedUpdateManyInput = {
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
  }

  export type karyawanCreateInput = {
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role?: $Enums.karyawan_role | null
    reservasi?: reservasiCreateNestedManyWithoutKaryawanInput
  }

  export type karyawanUncheckedCreateInput = {
    id_karyawan?: number
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role?: $Enums.karyawan_role | null
    reservasi?: reservasiUncheckedCreateNestedManyWithoutKaryawanInput
  }

  export type karyawanUpdateInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
    reservasi?: reservasiUpdateManyWithoutKaryawanNestedInput
  }

  export type karyawanUncheckedUpdateInput = {
    id_karyawan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
    reservasi?: reservasiUncheckedUpdateManyWithoutKaryawanNestedInput
  }

  export type karyawanCreateManyInput = {
    id_karyawan?: number
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role?: $Enums.karyawan_role | null
  }

  export type karyawanUpdateManyMutationInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
  }

  export type karyawanUncheckedUpdateManyInput = {
    id_karyawan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
  }

  export type reservasiCreateInput = {
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
    tamu: tamuCreateNestedOneWithoutReservasiInput
    kamar: kamarCreateNestedOneWithoutReservasiInput
    karyawan: karyawanCreateNestedOneWithoutReservasiInput
  }

  export type reservasiUncheckedCreateInput = {
    id_reservasi?: number
    id_tamu: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiUpdateInput = {
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
    tamu?: tamuUpdateOneRequiredWithoutReservasiNestedInput
    kamar?: kamarUpdateOneRequiredWithoutReservasiNestedInput
    karyawan?: karyawanUpdateOneRequiredWithoutReservasiNestedInput
  }

  export type reservasiUncheckedUpdateInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiCreateManyInput = {
    id_reservasi?: number
    id_tamu: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiUpdateManyMutationInput = {
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiUncheckedUpdateManyInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type tamuCreateInput = {
    nama: string
    no_hp: string
    alamat: string
    reservasi?: reservasiCreateNestedManyWithoutTamuInput
  }

  export type tamuUncheckedCreateInput = {
    id_tamu?: number
    nama: string
    no_hp: string
    alamat: string
    reservasi?: reservasiUncheckedCreateNestedManyWithoutTamuInput
  }

  export type tamuUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    reservasi?: reservasiUpdateManyWithoutTamuNestedInput
  }

  export type tamuUncheckedUpdateInput = {
    id_tamu?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    reservasi?: reservasiUncheckedUpdateManyWithoutTamuNestedInput
  }

  export type tamuCreateManyInput = {
    id_tamu?: number
    nama: string
    no_hp: string
    alamat: string
  }

  export type tamuUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type tamuUncheckedUpdateManyInput = {
    id_tamu?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type tipe_kamarCreateInput = {
    nama_tipe: string
    harga: Decimal | DecimalJsLike | number | string
    fasilitas: string
    kamar?: kamarCreateNestedManyWithoutTipe_kamarInput
  }

  export type tipe_kamarUncheckedCreateInput = {
    id_tipe_kamar?: number
    nama_tipe: string
    harga: Decimal | DecimalJsLike | number | string
    fasilitas: string
    kamar?: kamarUncheckedCreateNestedManyWithoutTipe_kamarInput
  }

  export type tipe_kamarUpdateInput = {
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    kamar?: kamarUpdateManyWithoutTipe_kamarNestedInput
  }

  export type tipe_kamarUncheckedUpdateInput = {
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
    kamar?: kamarUncheckedUpdateManyWithoutTipe_kamarNestedInput
  }

  export type tipe_kamarCreateManyInput = {
    id_tipe_kamar?: number
    nama_tipe: string
    harga: Decimal | DecimalJsLike | number | string
    fasilitas: string
  }

  export type tipe_kamarUpdateManyMutationInput = {
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
  }

  export type tipe_kamarUncheckedUpdateManyInput = {
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumkamar_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.kamar_status | Enumkamar_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.kamar_status[] | null
    notIn?: $Enums.kamar_status[] | null
    not?: NestedEnumkamar_statusNullableFilter<$PrismaModel> | $Enums.kamar_status | null
  }

  export type Tipe_kamarScalarRelationFilter = {
    is?: tipe_kamarWhereInput
    isNot?: tipe_kamarWhereInput
  }

  export type ReservasiListRelationFilter = {
    every?: reservasiWhereInput
    some?: reservasiWhereInput
    none?: reservasiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type reservasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type kamarOrderByRelevanceInput = {
    fields: kamarOrderByRelevanceFieldEnum | kamarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kamarCountOrderByAggregateInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
    nomor_kamar?: SortOrder
    status?: SortOrder
  }

  export type kamarAvgOrderByAggregateInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
  }

  export type kamarMaxOrderByAggregateInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
    nomor_kamar?: SortOrder
    status?: SortOrder
  }

  export type kamarMinOrderByAggregateInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
    nomor_kamar?: SortOrder
    status?: SortOrder
  }

  export type kamarSumOrderByAggregateInput = {
    id_kamar?: SortOrder
    id_tipe_kamar?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumkamar_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kamar_status | Enumkamar_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.kamar_status[] | null
    notIn?: $Enums.kamar_status[] | null
    not?: NestedEnumkamar_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.kamar_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumkamar_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumkamar_statusNullableFilter<$PrismaModel>
  }

  export type Enumkaryawan_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.karyawan_role | Enumkaryawan_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.karyawan_role[] | null
    notIn?: $Enums.karyawan_role[] | null
    not?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel> | $Enums.karyawan_role | null
  }

  export type karyawanOrderByRelevanceInput = {
    fields: karyawanOrderByRelevanceFieldEnum | karyawanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type karyawanCountOrderByAggregateInput = {
    id_karyawan?: SortOrder
    nama_karyawan?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp_karyawan?: SortOrder
    role?: SortOrder
  }

  export type karyawanAvgOrderByAggregateInput = {
    id_karyawan?: SortOrder
  }

  export type karyawanMaxOrderByAggregateInput = {
    id_karyawan?: SortOrder
    nama_karyawan?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp_karyawan?: SortOrder
    role?: SortOrder
  }

  export type karyawanMinOrderByAggregateInput = {
    id_karyawan?: SortOrder
    nama_karyawan?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    no_hp_karyawan?: SortOrder
    role?: SortOrder
  }

  export type karyawanSumOrderByAggregateInput = {
    id_karyawan?: SortOrder
  }

  export type Enumkaryawan_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.karyawan_role | Enumkaryawan_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.karyawan_role[] | null
    notIn?: $Enums.karyawan_role[] | null
    not?: NestedEnumkaryawan_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.karyawan_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumreservasi_metode_pembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_metode_pembayaran | Enumreservasi_metode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.reservasi_metode_pembayaran[]
    notIn?: $Enums.reservasi_metode_pembayaran[]
    not?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel> | $Enums.reservasi_metode_pembayaran
  }

  export type Enumreservasi_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_status | Enumreservasi_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservasi_status[] | null
    notIn?: $Enums.reservasi_status[] | null
    not?: NestedEnumreservasi_statusNullableFilter<$PrismaModel> | $Enums.reservasi_status | null
  }

  export type TamuScalarRelationFilter = {
    is?: tamuWhereInput
    isNot?: tamuWhereInput
  }

  export type KamarScalarRelationFilter = {
    is?: kamarWhereInput
    isNot?: kamarWhereInput
  }

  export type KaryawanScalarRelationFilter = {
    is?: karyawanWhereInput
    isNot?: karyawanWhereInput
  }

  export type reservasiCountOrderByAggregateInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    tgl_reservasi?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    total_bayar?: SortOrder
    metode_pembayaran?: SortOrder
    status?: SortOrder
  }

  export type reservasiAvgOrderByAggregateInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    total_bayar?: SortOrder
  }

  export type reservasiMaxOrderByAggregateInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    tgl_reservasi?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    total_bayar?: SortOrder
    metode_pembayaran?: SortOrder
    status?: SortOrder
  }

  export type reservasiMinOrderByAggregateInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    tgl_reservasi?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    total_bayar?: SortOrder
    metode_pembayaran?: SortOrder
    status?: SortOrder
  }

  export type reservasiSumOrderByAggregateInput = {
    id_reservasi?: SortOrder
    id_tamu?: SortOrder
    id_kamar?: SortOrder
    id_karyawan?: SortOrder
    total_bayar?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumreservasi_metode_pembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_metode_pembayaran | Enumreservasi_metode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.reservasi_metode_pembayaran[]
    notIn?: $Enums.reservasi_metode_pembayaran[]
    not?: NestedEnumreservasi_metode_pembayaranWithAggregatesFilter<$PrismaModel> | $Enums.reservasi_metode_pembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel>
    _max?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel>
  }

  export type Enumreservasi_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_status | Enumreservasi_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservasi_status[] | null
    notIn?: $Enums.reservasi_status[] | null
    not?: NestedEnumreservasi_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservasi_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservasi_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumreservasi_statusNullableFilter<$PrismaModel>
  }

  export type tamuOrderByRelevanceInput = {
    fields: tamuOrderByRelevanceFieldEnum | tamuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tamuCountOrderByAggregateInput = {
    id_tamu?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type tamuAvgOrderByAggregateInput = {
    id_tamu?: SortOrder
  }

  export type tamuMaxOrderByAggregateInput = {
    id_tamu?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type tamuMinOrderByAggregateInput = {
    id_tamu?: SortOrder
    nama?: SortOrder
    no_hp?: SortOrder
    alamat?: SortOrder
  }

  export type tamuSumOrderByAggregateInput = {
    id_tamu?: SortOrder
  }

  export type KamarListRelationFilter = {
    every?: kamarWhereInput
    some?: kamarWhereInput
    none?: kamarWhereInput
  }

  export type kamarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tipe_kamarOrderByRelevanceInput = {
    fields: tipe_kamarOrderByRelevanceFieldEnum | tipe_kamarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tipe_kamarCountOrderByAggregateInput = {
    id_tipe_kamar?: SortOrder
    nama_tipe?: SortOrder
    harga?: SortOrder
    fasilitas?: SortOrder
  }

  export type tipe_kamarAvgOrderByAggregateInput = {
    id_tipe_kamar?: SortOrder
    harga?: SortOrder
  }

  export type tipe_kamarMaxOrderByAggregateInput = {
    id_tipe_kamar?: SortOrder
    nama_tipe?: SortOrder
    harga?: SortOrder
    fasilitas?: SortOrder
  }

  export type tipe_kamarMinOrderByAggregateInput = {
    id_tipe_kamar?: SortOrder
    nama_tipe?: SortOrder
    harga?: SortOrder
    fasilitas?: SortOrder
  }

  export type tipe_kamarSumOrderByAggregateInput = {
    id_tipe_kamar?: SortOrder
    harga?: SortOrder
  }

  export type tipe_kamarCreateNestedOneWithoutKamarInput = {
    create?: XOR<tipe_kamarCreateWithoutKamarInput, tipe_kamarUncheckedCreateWithoutKamarInput>
    connectOrCreate?: tipe_kamarCreateOrConnectWithoutKamarInput
    connect?: tipe_kamarWhereUniqueInput
  }

  export type reservasiCreateNestedManyWithoutKamarInput = {
    create?: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput> | reservasiCreateWithoutKamarInput[] | reservasiUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKamarInput | reservasiCreateOrConnectWithoutKamarInput[]
    createMany?: reservasiCreateManyKamarInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type reservasiUncheckedCreateNestedManyWithoutKamarInput = {
    create?: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput> | reservasiCreateWithoutKamarInput[] | reservasiUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKamarInput | reservasiCreateOrConnectWithoutKamarInput[]
    createMany?: reservasiCreateManyKamarInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumkamar_statusFieldUpdateOperationsInput = {
    set?: $Enums.kamar_status | null
  }

  export type tipe_kamarUpdateOneRequiredWithoutKamarNestedInput = {
    create?: XOR<tipe_kamarCreateWithoutKamarInput, tipe_kamarUncheckedCreateWithoutKamarInput>
    connectOrCreate?: tipe_kamarCreateOrConnectWithoutKamarInput
    upsert?: tipe_kamarUpsertWithoutKamarInput
    connect?: tipe_kamarWhereUniqueInput
    update?: XOR<XOR<tipe_kamarUpdateToOneWithWhereWithoutKamarInput, tipe_kamarUpdateWithoutKamarInput>, tipe_kamarUncheckedUpdateWithoutKamarInput>
  }

  export type reservasiUpdateManyWithoutKamarNestedInput = {
    create?: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput> | reservasiCreateWithoutKamarInput[] | reservasiUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKamarInput | reservasiCreateOrConnectWithoutKamarInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutKamarInput | reservasiUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: reservasiCreateManyKamarInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutKamarInput | reservasiUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutKamarInput | reservasiUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type reservasiUncheckedUpdateManyWithoutKamarNestedInput = {
    create?: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput> | reservasiCreateWithoutKamarInput[] | reservasiUncheckedCreateWithoutKamarInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKamarInput | reservasiCreateOrConnectWithoutKamarInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutKamarInput | reservasiUpsertWithWhereUniqueWithoutKamarInput[]
    createMany?: reservasiCreateManyKamarInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutKamarInput | reservasiUpdateWithWhereUniqueWithoutKamarInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutKamarInput | reservasiUpdateManyWithWhereWithoutKamarInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type reservasiCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput> | reservasiCreateWithoutKaryawanInput[] | reservasiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKaryawanInput | reservasiCreateOrConnectWithoutKaryawanInput[]
    createMany?: reservasiCreateManyKaryawanInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type reservasiUncheckedCreateNestedManyWithoutKaryawanInput = {
    create?: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput> | reservasiCreateWithoutKaryawanInput[] | reservasiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKaryawanInput | reservasiCreateOrConnectWithoutKaryawanInput[]
    createMany?: reservasiCreateManyKaryawanInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type NullableEnumkaryawan_roleFieldUpdateOperationsInput = {
    set?: $Enums.karyawan_role | null
  }

  export type reservasiUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput> | reservasiCreateWithoutKaryawanInput[] | reservasiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKaryawanInput | reservasiCreateOrConnectWithoutKaryawanInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutKaryawanInput | reservasiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: reservasiCreateManyKaryawanInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutKaryawanInput | reservasiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutKaryawanInput | reservasiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type reservasiUncheckedUpdateManyWithoutKaryawanNestedInput = {
    create?: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput> | reservasiCreateWithoutKaryawanInput[] | reservasiUncheckedCreateWithoutKaryawanInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutKaryawanInput | reservasiCreateOrConnectWithoutKaryawanInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutKaryawanInput | reservasiUpsertWithWhereUniqueWithoutKaryawanInput[]
    createMany?: reservasiCreateManyKaryawanInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutKaryawanInput | reservasiUpdateWithWhereUniqueWithoutKaryawanInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutKaryawanInput | reservasiUpdateManyWithWhereWithoutKaryawanInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type tamuCreateNestedOneWithoutReservasiInput = {
    create?: XOR<tamuCreateWithoutReservasiInput, tamuUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: tamuCreateOrConnectWithoutReservasiInput
    connect?: tamuWhereUniqueInput
  }

  export type kamarCreateNestedOneWithoutReservasiInput = {
    create?: XOR<kamarCreateWithoutReservasiInput, kamarUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: kamarCreateOrConnectWithoutReservasiInput
    connect?: kamarWhereUniqueInput
  }

  export type karyawanCreateNestedOneWithoutReservasiInput = {
    create?: XOR<karyawanCreateWithoutReservasiInput, karyawanUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: karyawanCreateOrConnectWithoutReservasiInput
    connect?: karyawanWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumreservasi_metode_pembayaranFieldUpdateOperationsInput = {
    set?: $Enums.reservasi_metode_pembayaran
  }

  export type NullableEnumreservasi_statusFieldUpdateOperationsInput = {
    set?: $Enums.reservasi_status | null
  }

  export type tamuUpdateOneRequiredWithoutReservasiNestedInput = {
    create?: XOR<tamuCreateWithoutReservasiInput, tamuUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: tamuCreateOrConnectWithoutReservasiInput
    upsert?: tamuUpsertWithoutReservasiInput
    connect?: tamuWhereUniqueInput
    update?: XOR<XOR<tamuUpdateToOneWithWhereWithoutReservasiInput, tamuUpdateWithoutReservasiInput>, tamuUncheckedUpdateWithoutReservasiInput>
  }

  export type kamarUpdateOneRequiredWithoutReservasiNestedInput = {
    create?: XOR<kamarCreateWithoutReservasiInput, kamarUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: kamarCreateOrConnectWithoutReservasiInput
    upsert?: kamarUpsertWithoutReservasiInput
    connect?: kamarWhereUniqueInput
    update?: XOR<XOR<kamarUpdateToOneWithWhereWithoutReservasiInput, kamarUpdateWithoutReservasiInput>, kamarUncheckedUpdateWithoutReservasiInput>
  }

  export type karyawanUpdateOneRequiredWithoutReservasiNestedInput = {
    create?: XOR<karyawanCreateWithoutReservasiInput, karyawanUncheckedCreateWithoutReservasiInput>
    connectOrCreate?: karyawanCreateOrConnectWithoutReservasiInput
    upsert?: karyawanUpsertWithoutReservasiInput
    connect?: karyawanWhereUniqueInput
    update?: XOR<XOR<karyawanUpdateToOneWithWhereWithoutReservasiInput, karyawanUpdateWithoutReservasiInput>, karyawanUncheckedUpdateWithoutReservasiInput>
  }

  export type reservasiCreateNestedManyWithoutTamuInput = {
    create?: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput> | reservasiCreateWithoutTamuInput[] | reservasiUncheckedCreateWithoutTamuInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutTamuInput | reservasiCreateOrConnectWithoutTamuInput[]
    createMany?: reservasiCreateManyTamuInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type reservasiUncheckedCreateNestedManyWithoutTamuInput = {
    create?: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput> | reservasiCreateWithoutTamuInput[] | reservasiUncheckedCreateWithoutTamuInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutTamuInput | reservasiCreateOrConnectWithoutTamuInput[]
    createMany?: reservasiCreateManyTamuInputEnvelope
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
  }

  export type reservasiUpdateManyWithoutTamuNestedInput = {
    create?: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput> | reservasiCreateWithoutTamuInput[] | reservasiUncheckedCreateWithoutTamuInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutTamuInput | reservasiCreateOrConnectWithoutTamuInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutTamuInput | reservasiUpsertWithWhereUniqueWithoutTamuInput[]
    createMany?: reservasiCreateManyTamuInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutTamuInput | reservasiUpdateWithWhereUniqueWithoutTamuInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutTamuInput | reservasiUpdateManyWithWhereWithoutTamuInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type reservasiUncheckedUpdateManyWithoutTamuNestedInput = {
    create?: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput> | reservasiCreateWithoutTamuInput[] | reservasiUncheckedCreateWithoutTamuInput[]
    connectOrCreate?: reservasiCreateOrConnectWithoutTamuInput | reservasiCreateOrConnectWithoutTamuInput[]
    upsert?: reservasiUpsertWithWhereUniqueWithoutTamuInput | reservasiUpsertWithWhereUniqueWithoutTamuInput[]
    createMany?: reservasiCreateManyTamuInputEnvelope
    set?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    disconnect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    delete?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    connect?: reservasiWhereUniqueInput | reservasiWhereUniqueInput[]
    update?: reservasiUpdateWithWhereUniqueWithoutTamuInput | reservasiUpdateWithWhereUniqueWithoutTamuInput[]
    updateMany?: reservasiUpdateManyWithWhereWithoutTamuInput | reservasiUpdateManyWithWhereWithoutTamuInput[]
    deleteMany?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
  }

  export type kamarCreateNestedManyWithoutTipe_kamarInput = {
    create?: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput> | kamarCreateWithoutTipe_kamarInput[] | kamarUncheckedCreateWithoutTipe_kamarInput[]
    connectOrCreate?: kamarCreateOrConnectWithoutTipe_kamarInput | kamarCreateOrConnectWithoutTipe_kamarInput[]
    createMany?: kamarCreateManyTipe_kamarInputEnvelope
    connect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
  }

  export type kamarUncheckedCreateNestedManyWithoutTipe_kamarInput = {
    create?: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput> | kamarCreateWithoutTipe_kamarInput[] | kamarUncheckedCreateWithoutTipe_kamarInput[]
    connectOrCreate?: kamarCreateOrConnectWithoutTipe_kamarInput | kamarCreateOrConnectWithoutTipe_kamarInput[]
    createMany?: kamarCreateManyTipe_kamarInputEnvelope
    connect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
  }

  export type kamarUpdateManyWithoutTipe_kamarNestedInput = {
    create?: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput> | kamarCreateWithoutTipe_kamarInput[] | kamarUncheckedCreateWithoutTipe_kamarInput[]
    connectOrCreate?: kamarCreateOrConnectWithoutTipe_kamarInput | kamarCreateOrConnectWithoutTipe_kamarInput[]
    upsert?: kamarUpsertWithWhereUniqueWithoutTipe_kamarInput | kamarUpsertWithWhereUniqueWithoutTipe_kamarInput[]
    createMany?: kamarCreateManyTipe_kamarInputEnvelope
    set?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    disconnect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    delete?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    connect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    update?: kamarUpdateWithWhereUniqueWithoutTipe_kamarInput | kamarUpdateWithWhereUniqueWithoutTipe_kamarInput[]
    updateMany?: kamarUpdateManyWithWhereWithoutTipe_kamarInput | kamarUpdateManyWithWhereWithoutTipe_kamarInput[]
    deleteMany?: kamarScalarWhereInput | kamarScalarWhereInput[]
  }

  export type kamarUncheckedUpdateManyWithoutTipe_kamarNestedInput = {
    create?: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput> | kamarCreateWithoutTipe_kamarInput[] | kamarUncheckedCreateWithoutTipe_kamarInput[]
    connectOrCreate?: kamarCreateOrConnectWithoutTipe_kamarInput | kamarCreateOrConnectWithoutTipe_kamarInput[]
    upsert?: kamarUpsertWithWhereUniqueWithoutTipe_kamarInput | kamarUpsertWithWhereUniqueWithoutTipe_kamarInput[]
    createMany?: kamarCreateManyTipe_kamarInputEnvelope
    set?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    disconnect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    delete?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    connect?: kamarWhereUniqueInput | kamarWhereUniqueInput[]
    update?: kamarUpdateWithWhereUniqueWithoutTipe_kamarInput | kamarUpdateWithWhereUniqueWithoutTipe_kamarInput[]
    updateMany?: kamarUpdateManyWithWhereWithoutTipe_kamarInput | kamarUpdateManyWithWhereWithoutTipe_kamarInput[]
    deleteMany?: kamarScalarWhereInput | kamarScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumkamar_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.kamar_status | Enumkamar_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.kamar_status[] | null
    notIn?: $Enums.kamar_status[] | null
    not?: NestedEnumkamar_statusNullableFilter<$PrismaModel> | $Enums.kamar_status | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumkamar_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kamar_status | Enumkamar_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.kamar_status[] | null
    notIn?: $Enums.kamar_status[] | null
    not?: NestedEnumkamar_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.kamar_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumkamar_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumkamar_statusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumkaryawan_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.karyawan_role | Enumkaryawan_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.karyawan_role[] | null
    notIn?: $Enums.karyawan_role[] | null
    not?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel> | $Enums.karyawan_role | null
  }

  export type NestedEnumkaryawan_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.karyawan_role | Enumkaryawan_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.karyawan_role[] | null
    notIn?: $Enums.karyawan_role[] | null
    not?: NestedEnumkaryawan_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.karyawan_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumkaryawan_roleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_metode_pembayaran | Enumreservasi_metode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.reservasi_metode_pembayaran[]
    notIn?: $Enums.reservasi_metode_pembayaran[]
    not?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel> | $Enums.reservasi_metode_pembayaran
  }

  export type NestedEnumreservasi_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_status | Enumreservasi_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservasi_status[] | null
    notIn?: $Enums.reservasi_status[] | null
    not?: NestedEnumreservasi_statusNullableFilter<$PrismaModel> | $Enums.reservasi_status | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumreservasi_metode_pembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_metode_pembayaran | Enumreservasi_metode_pembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.reservasi_metode_pembayaran[]
    notIn?: $Enums.reservasi_metode_pembayaran[]
    not?: NestedEnumreservasi_metode_pembayaranWithAggregatesFilter<$PrismaModel> | $Enums.reservasi_metode_pembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel>
    _max?: NestedEnumreservasi_metode_pembayaranFilter<$PrismaModel>
  }

  export type NestedEnumreservasi_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reservasi_status | Enumreservasi_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.reservasi_status[] | null
    notIn?: $Enums.reservasi_status[] | null
    not?: NestedEnumreservasi_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.reservasi_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumreservasi_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumreservasi_statusNullableFilter<$PrismaModel>
  }

  export type tipe_kamarCreateWithoutKamarInput = {
    nama_tipe: string
    harga: Decimal | DecimalJsLike | number | string
    fasilitas: string
  }

  export type tipe_kamarUncheckedCreateWithoutKamarInput = {
    id_tipe_kamar?: number
    nama_tipe: string
    harga: Decimal | DecimalJsLike | number | string
    fasilitas: string
  }

  export type tipe_kamarCreateOrConnectWithoutKamarInput = {
    where: tipe_kamarWhereUniqueInput
    create: XOR<tipe_kamarCreateWithoutKamarInput, tipe_kamarUncheckedCreateWithoutKamarInput>
  }

  export type reservasiCreateWithoutKamarInput = {
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
    tamu: tamuCreateNestedOneWithoutReservasiInput
    karyawan: karyawanCreateNestedOneWithoutReservasiInput
  }

  export type reservasiUncheckedCreateWithoutKamarInput = {
    id_reservasi?: number
    id_tamu: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiCreateOrConnectWithoutKamarInput = {
    where: reservasiWhereUniqueInput
    create: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput>
  }

  export type reservasiCreateManyKamarInputEnvelope = {
    data: reservasiCreateManyKamarInput | reservasiCreateManyKamarInput[]
    skipDuplicates?: boolean
  }

  export type tipe_kamarUpsertWithoutKamarInput = {
    update: XOR<tipe_kamarUpdateWithoutKamarInput, tipe_kamarUncheckedUpdateWithoutKamarInput>
    create: XOR<tipe_kamarCreateWithoutKamarInput, tipe_kamarUncheckedCreateWithoutKamarInput>
    where?: tipe_kamarWhereInput
  }

  export type tipe_kamarUpdateToOneWithWhereWithoutKamarInput = {
    where?: tipe_kamarWhereInput
    data: XOR<tipe_kamarUpdateWithoutKamarInput, tipe_kamarUncheckedUpdateWithoutKamarInput>
  }

  export type tipe_kamarUpdateWithoutKamarInput = {
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
  }

  export type tipe_kamarUncheckedUpdateWithoutKamarInput = {
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nama_tipe?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fasilitas?: StringFieldUpdateOperationsInput | string
  }

  export type reservasiUpsertWithWhereUniqueWithoutKamarInput = {
    where: reservasiWhereUniqueInput
    update: XOR<reservasiUpdateWithoutKamarInput, reservasiUncheckedUpdateWithoutKamarInput>
    create: XOR<reservasiCreateWithoutKamarInput, reservasiUncheckedCreateWithoutKamarInput>
  }

  export type reservasiUpdateWithWhereUniqueWithoutKamarInput = {
    where: reservasiWhereUniqueInput
    data: XOR<reservasiUpdateWithoutKamarInput, reservasiUncheckedUpdateWithoutKamarInput>
  }

  export type reservasiUpdateManyWithWhereWithoutKamarInput = {
    where: reservasiScalarWhereInput
    data: XOR<reservasiUpdateManyMutationInput, reservasiUncheckedUpdateManyWithoutKamarInput>
  }

  export type reservasiScalarWhereInput = {
    AND?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
    OR?: reservasiScalarWhereInput[]
    NOT?: reservasiScalarWhereInput | reservasiScalarWhereInput[]
    id_reservasi?: IntFilter<"reservasi"> | number
    id_tamu?: IntFilter<"reservasi"> | number
    id_kamar?: IntFilter<"reservasi"> | number
    id_karyawan?: IntFilter<"reservasi"> | number
    tgl_reservasi?: DateTimeFilter<"reservasi"> | Date | string
    check_in?: DateTimeFilter<"reservasi"> | Date | string
    check_out?: DateTimeFilter<"reservasi"> | Date | string
    total_bayar?: DecimalFilter<"reservasi"> | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFilter<"reservasi"> | $Enums.reservasi_metode_pembayaran
    status?: Enumreservasi_statusNullableFilter<"reservasi"> | $Enums.reservasi_status | null
  }

  export type reservasiCreateWithoutKaryawanInput = {
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
    tamu: tamuCreateNestedOneWithoutReservasiInput
    kamar: kamarCreateNestedOneWithoutReservasiInput
  }

  export type reservasiUncheckedCreateWithoutKaryawanInput = {
    id_reservasi?: number
    id_tamu: number
    id_kamar: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiCreateOrConnectWithoutKaryawanInput = {
    where: reservasiWhereUniqueInput
    create: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput>
  }

  export type reservasiCreateManyKaryawanInputEnvelope = {
    data: reservasiCreateManyKaryawanInput | reservasiCreateManyKaryawanInput[]
    skipDuplicates?: boolean
  }

  export type reservasiUpsertWithWhereUniqueWithoutKaryawanInput = {
    where: reservasiWhereUniqueInput
    update: XOR<reservasiUpdateWithoutKaryawanInput, reservasiUncheckedUpdateWithoutKaryawanInput>
    create: XOR<reservasiCreateWithoutKaryawanInput, reservasiUncheckedCreateWithoutKaryawanInput>
  }

  export type reservasiUpdateWithWhereUniqueWithoutKaryawanInput = {
    where: reservasiWhereUniqueInput
    data: XOR<reservasiUpdateWithoutKaryawanInput, reservasiUncheckedUpdateWithoutKaryawanInput>
  }

  export type reservasiUpdateManyWithWhereWithoutKaryawanInput = {
    where: reservasiScalarWhereInput
    data: XOR<reservasiUpdateManyMutationInput, reservasiUncheckedUpdateManyWithoutKaryawanInput>
  }

  export type tamuCreateWithoutReservasiInput = {
    nama: string
    no_hp: string
    alamat: string
  }

  export type tamuUncheckedCreateWithoutReservasiInput = {
    id_tamu?: number
    nama: string
    no_hp: string
    alamat: string
  }

  export type tamuCreateOrConnectWithoutReservasiInput = {
    where: tamuWhereUniqueInput
    create: XOR<tamuCreateWithoutReservasiInput, tamuUncheckedCreateWithoutReservasiInput>
  }

  export type kamarCreateWithoutReservasiInput = {
    nomor_kamar: string
    status?: $Enums.kamar_status | null
    tipe_kamar: tipe_kamarCreateNestedOneWithoutKamarInput
  }

  export type kamarUncheckedCreateWithoutReservasiInput = {
    id_kamar?: number
    id_tipe_kamar: number
    nomor_kamar: string
    status?: $Enums.kamar_status | null
  }

  export type kamarCreateOrConnectWithoutReservasiInput = {
    where: kamarWhereUniqueInput
    create: XOR<kamarCreateWithoutReservasiInput, kamarUncheckedCreateWithoutReservasiInput>
  }

  export type karyawanCreateWithoutReservasiInput = {
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role?: $Enums.karyawan_role | null
  }

  export type karyawanUncheckedCreateWithoutReservasiInput = {
    id_karyawan?: number
    nama_karyawan: string
    username: string
    email: string
    password: string
    no_hp_karyawan: string
    role?: $Enums.karyawan_role | null
  }

  export type karyawanCreateOrConnectWithoutReservasiInput = {
    where: karyawanWhereUniqueInput
    create: XOR<karyawanCreateWithoutReservasiInput, karyawanUncheckedCreateWithoutReservasiInput>
  }

  export type tamuUpsertWithoutReservasiInput = {
    update: XOR<tamuUpdateWithoutReservasiInput, tamuUncheckedUpdateWithoutReservasiInput>
    create: XOR<tamuCreateWithoutReservasiInput, tamuUncheckedCreateWithoutReservasiInput>
    where?: tamuWhereInput
  }

  export type tamuUpdateToOneWithWhereWithoutReservasiInput = {
    where?: tamuWhereInput
    data: XOR<tamuUpdateWithoutReservasiInput, tamuUncheckedUpdateWithoutReservasiInput>
  }

  export type tamuUpdateWithoutReservasiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type tamuUncheckedUpdateWithoutReservasiInput = {
    id_tamu?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    no_hp?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type kamarUpsertWithoutReservasiInput = {
    update: XOR<kamarUpdateWithoutReservasiInput, kamarUncheckedUpdateWithoutReservasiInput>
    create: XOR<kamarCreateWithoutReservasiInput, kamarUncheckedCreateWithoutReservasiInput>
    where?: kamarWhereInput
  }

  export type kamarUpdateToOneWithWhereWithoutReservasiInput = {
    where?: kamarWhereInput
    data: XOR<kamarUpdateWithoutReservasiInput, kamarUncheckedUpdateWithoutReservasiInput>
  }

  export type kamarUpdateWithoutReservasiInput = {
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
    tipe_kamar?: tipe_kamarUpdateOneRequiredWithoutKamarNestedInput
  }

  export type kamarUncheckedUpdateWithoutReservasiInput = {
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_tipe_kamar?: IntFieldUpdateOperationsInput | number
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
  }

  export type karyawanUpsertWithoutReservasiInput = {
    update: XOR<karyawanUpdateWithoutReservasiInput, karyawanUncheckedUpdateWithoutReservasiInput>
    create: XOR<karyawanCreateWithoutReservasiInput, karyawanUncheckedCreateWithoutReservasiInput>
    where?: karyawanWhereInput
  }

  export type karyawanUpdateToOneWithWhereWithoutReservasiInput = {
    where?: karyawanWhereInput
    data: XOR<karyawanUpdateWithoutReservasiInput, karyawanUncheckedUpdateWithoutReservasiInput>
  }

  export type karyawanUpdateWithoutReservasiInput = {
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
  }

  export type karyawanUncheckedUpdateWithoutReservasiInput = {
    id_karyawan?: IntFieldUpdateOperationsInput | number
    nama_karyawan?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    no_hp_karyawan?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumkaryawan_roleFieldUpdateOperationsInput | $Enums.karyawan_role | null
  }

  export type reservasiCreateWithoutTamuInput = {
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
    kamar: kamarCreateNestedOneWithoutReservasiInput
    karyawan: karyawanCreateNestedOneWithoutReservasiInput
  }

  export type reservasiUncheckedCreateWithoutTamuInput = {
    id_reservasi?: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiCreateOrConnectWithoutTamuInput = {
    where: reservasiWhereUniqueInput
    create: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput>
  }

  export type reservasiCreateManyTamuInputEnvelope = {
    data: reservasiCreateManyTamuInput | reservasiCreateManyTamuInput[]
    skipDuplicates?: boolean
  }

  export type reservasiUpsertWithWhereUniqueWithoutTamuInput = {
    where: reservasiWhereUniqueInput
    update: XOR<reservasiUpdateWithoutTamuInput, reservasiUncheckedUpdateWithoutTamuInput>
    create: XOR<reservasiCreateWithoutTamuInput, reservasiUncheckedCreateWithoutTamuInput>
  }

  export type reservasiUpdateWithWhereUniqueWithoutTamuInput = {
    where: reservasiWhereUniqueInput
    data: XOR<reservasiUpdateWithoutTamuInput, reservasiUncheckedUpdateWithoutTamuInput>
  }

  export type reservasiUpdateManyWithWhereWithoutTamuInput = {
    where: reservasiScalarWhereInput
    data: XOR<reservasiUpdateManyMutationInput, reservasiUncheckedUpdateManyWithoutTamuInput>
  }

  export type kamarCreateWithoutTipe_kamarInput = {
    nomor_kamar: string
    status?: $Enums.kamar_status | null
    reservasi?: reservasiCreateNestedManyWithoutKamarInput
  }

  export type kamarUncheckedCreateWithoutTipe_kamarInput = {
    id_kamar?: number
    nomor_kamar: string
    status?: $Enums.kamar_status | null
    reservasi?: reservasiUncheckedCreateNestedManyWithoutKamarInput
  }

  export type kamarCreateOrConnectWithoutTipe_kamarInput = {
    where: kamarWhereUniqueInput
    create: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput>
  }

  export type kamarCreateManyTipe_kamarInputEnvelope = {
    data: kamarCreateManyTipe_kamarInput | kamarCreateManyTipe_kamarInput[]
    skipDuplicates?: boolean
  }

  export type kamarUpsertWithWhereUniqueWithoutTipe_kamarInput = {
    where: kamarWhereUniqueInput
    update: XOR<kamarUpdateWithoutTipe_kamarInput, kamarUncheckedUpdateWithoutTipe_kamarInput>
    create: XOR<kamarCreateWithoutTipe_kamarInput, kamarUncheckedCreateWithoutTipe_kamarInput>
  }

  export type kamarUpdateWithWhereUniqueWithoutTipe_kamarInput = {
    where: kamarWhereUniqueInput
    data: XOR<kamarUpdateWithoutTipe_kamarInput, kamarUncheckedUpdateWithoutTipe_kamarInput>
  }

  export type kamarUpdateManyWithWhereWithoutTipe_kamarInput = {
    where: kamarScalarWhereInput
    data: XOR<kamarUpdateManyMutationInput, kamarUncheckedUpdateManyWithoutTipe_kamarInput>
  }

  export type kamarScalarWhereInput = {
    AND?: kamarScalarWhereInput | kamarScalarWhereInput[]
    OR?: kamarScalarWhereInput[]
    NOT?: kamarScalarWhereInput | kamarScalarWhereInput[]
    id_kamar?: IntFilter<"kamar"> | number
    id_tipe_kamar?: IntFilter<"kamar"> | number
    nomor_kamar?: StringFilter<"kamar"> | string
    status?: Enumkamar_statusNullableFilter<"kamar"> | $Enums.kamar_status | null
  }

  export type reservasiCreateManyKamarInput = {
    id_reservasi?: number
    id_tamu: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiUpdateWithoutKamarInput = {
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
    tamu?: tamuUpdateOneRequiredWithoutReservasiNestedInput
    karyawan?: karyawanUpdateOneRequiredWithoutReservasiNestedInput
  }

  export type reservasiUncheckedUpdateWithoutKamarInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiUncheckedUpdateManyWithoutKamarInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiCreateManyKaryawanInput = {
    id_reservasi?: number
    id_tamu: number
    id_kamar: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiUpdateWithoutKaryawanInput = {
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
    tamu?: tamuUpdateOneRequiredWithoutReservasiNestedInput
    kamar?: kamarUpdateOneRequiredWithoutReservasiNestedInput
  }

  export type reservasiUncheckedUpdateWithoutKaryawanInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiUncheckedUpdateManyWithoutKaryawanInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_tamu?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiCreateManyTamuInput = {
    id_reservasi?: number
    id_kamar: number
    id_karyawan: number
    tgl_reservasi: Date | string
    check_in: Date | string
    check_out: Date | string
    total_bayar: Decimal | DecimalJsLike | number | string
    metode_pembayaran: $Enums.reservasi_metode_pembayaran
    status?: $Enums.reservasi_status | null
  }

  export type reservasiUpdateWithoutTamuInput = {
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
    kamar?: kamarUpdateOneRequiredWithoutReservasiNestedInput
    karyawan?: karyawanUpdateOneRequiredWithoutReservasiNestedInput
  }

  export type reservasiUncheckedUpdateWithoutTamuInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type reservasiUncheckedUpdateManyWithoutTamuInput = {
    id_reservasi?: IntFieldUpdateOperationsInput | number
    id_kamar?: IntFieldUpdateOperationsInput | number
    id_karyawan?: IntFieldUpdateOperationsInput | number
    tgl_reservasi?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    total_bayar?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metode_pembayaran?: Enumreservasi_metode_pembayaranFieldUpdateOperationsInput | $Enums.reservasi_metode_pembayaran
    status?: NullableEnumreservasi_statusFieldUpdateOperationsInput | $Enums.reservasi_status | null
  }

  export type kamarCreateManyTipe_kamarInput = {
    id_kamar?: number
    nomor_kamar: string
    status?: $Enums.kamar_status | null
  }

  export type kamarUpdateWithoutTipe_kamarInput = {
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
    reservasi?: reservasiUpdateManyWithoutKamarNestedInput
  }

  export type kamarUncheckedUpdateWithoutTipe_kamarInput = {
    id_kamar?: IntFieldUpdateOperationsInput | number
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
    reservasi?: reservasiUncheckedUpdateManyWithoutKamarNestedInput
  }

  export type kamarUncheckedUpdateManyWithoutTipe_kamarInput = {
    id_kamar?: IntFieldUpdateOperationsInput | number
    nomor_kamar?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumkamar_statusFieldUpdateOperationsInput | $Enums.kamar_status | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}