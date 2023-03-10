// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asERC1155(): Bytes | null {
    let value = this.get("asERC1155");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asERC1155(value: Bytes | null) {
    if (!value) {
      this.unset("asERC1155");
    } else {
      this.set("asERC1155", Value.fromBytes(<Bytes>value));
    }
  }

  get ERC1155balances(): Array<string> {
    let value = this.get("ERC1155balances");
    return value!.toStringArray();
  }

  set ERC1155balances(value: Array<string>) {
    this.set("ERC1155balances", Value.fromStringArray(value));
  }

  get ERC1155operatorOwner(): Array<string> {
    let value = this.get("ERC1155operatorOwner");
    return value!.toStringArray();
  }

  set ERC1155operatorOwner(value: Array<string>) {
    this.set("ERC1155operatorOwner", Value.fromStringArray(value));
  }

  get ERC1155operatorOperator(): Array<string> {
    let value = this.get("ERC1155operatorOperator");
    return value!.toStringArray();
  }

  set ERC1155operatorOperator(value: Array<string>) {
    this.set("ERC1155operatorOperator", Value.fromStringArray(value));
  }

  get ERC1155transferFromEvent(): Array<string> {
    let value = this.get("ERC1155transferFromEvent");
    return value!.toStringArray();
  }

  set ERC1155transferFromEvent(value: Array<string>) {
    this.set("ERC1155transferFromEvent", Value.fromStringArray(value));
  }

  get ERC1155transferToEvent(): Array<string> {
    let value = this.get("ERC1155transferToEvent");
    return value!.toStringArray();
  }

  set ERC1155transferToEvent(value: Array<string>) {
    this.set("ERC1155transferToEvent", Value.fromStringArray(value));
  }

  get ERC1155transferOperatorEvent(): Array<string> {
    let value = this.get("ERC1155transferOperatorEvent");
    return value!.toStringArray();
  }

  set ERC1155transferOperatorEvent(value: Array<string>) {
    this.set("ERC1155transferOperatorEvent", Value.fromStringArray(value));
  }

  get asOwnable(): Bytes | null {
    let value = this.get("asOwnable");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asOwnable(value: Bytes | null) {
    if (!value) {
      this.unset("asOwnable");
    } else {
      this.set("asOwnable", Value.fromBytes(<Bytes>value));
    }
  }

  get ownerOf(): Array<Bytes> {
    let value = this.get("ownerOf");
    return value!.toBytesArray();
  }

  set ownerOf(value: Array<Bytes>) {
    this.set("ownerOf", Value.fromBytesArray(value));
  }

  get ownershipTransferred(): Array<string> {
    let value = this.get("ownershipTransferred");
    return value!.toStringArray();
  }

  set ownershipTransferred(value: Array<string>) {
    this.set("ownershipTransferred", Value.fromStringArray(value));
  }

  get asAccessControl(): Bytes | null {
    let value = this.get("asAccessControl");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asAccessControl(value: Bytes | null) {
    if (!value) {
      this.unset("asAccessControl");
    } else {
      this.set("asAccessControl", Value.fromBytes(<Bytes>value));
    }
  }

  get membership(): Array<string> {
    let value = this.get("membership");
    return value!.toStringArray();
  }

  set membership(value: Array<string>) {
    this.set("membership", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleGrantedSender(): Array<string> {
    let value = this.get("roleGrantedSender");
    return value!.toStringArray();
  }

  set roleGrantedSender(value: Array<string>) {
    this.set("roleGrantedSender", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleRevokedSender(): Array<string> {
    let value = this.get("roleRevokedSender");
    return value!.toStringArray();
  }

  set roleRevokedSender(value: Array<string>) {
    this.set("roleRevokedSender", Value.fromStringArray(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC1155Contract extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC1155Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ERC1155Contract must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC1155Contract", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ERC1155Contract | null {
    return changetype<ERC1155Contract | null>(
      store.get("ERC1155Contract", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value!.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get operators(): Array<string> {
    let value = this.get("operators");
    return value!.toStringArray();
  }

  set operators(value: Array<string>) {
    this.set("operators", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC1155Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC1155Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC1155Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC1155Token", id.toString(), this);
    }
  }

  static load(id: string): ERC1155Token | null {
    return changetype<ERC1155Token | null>(store.get("ERC1155Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get totalSupply(): string {
    let value = this.get("totalSupply");
    return value!.toString();
  }

  set totalSupply(value: string) {
    this.set("totalSupply", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value!.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC1155Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC1155Balance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC1155Balance must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC1155Balance", id.toString(), this);
    }
  }

  static load(id: string): ERC1155Balance | null {
    return changetype<ERC1155Balance | null>(store.get("ERC1155Balance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get account(): Bytes | null {
    let value = this.get("account");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set account(value: Bytes | null) {
    if (!value) {
      this.unset("account");
    } else {
      this.set("account", Value.fromBytes(<Bytes>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }

  get transferFromEvent(): Array<string> {
    let value = this.get("transferFromEvent");
    return value!.toStringArray();
  }

  set transferFromEvent(value: Array<string>) {
    this.set("transferFromEvent", Value.fromStringArray(value));
  }

  get transferToEvent(): Array<string> {
    let value = this.get("transferToEvent");
    return value!.toStringArray();
  }

  set transferToEvent(value: Array<string>) {
    this.set("transferToEvent", Value.fromStringArray(value));
  }
}

export class ERC1155Operator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC1155Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC1155Operator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC1155Operator", id.toString(), this);
    }
  }

  static load(id: string): ERC1155Operator | null {
    return changetype<ERC1155Operator | null>(store.get("ERC1155Operator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class ERC1155Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC1155Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC1155Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC1155Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC1155Transfer | null {
    return changetype<ERC1155Transfer | null>(store.get("ERC1155Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes | null {
    let value = this.get("from");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set from(value: Bytes | null) {
    if (!value) {
      this.unset("from");
    } else {
      this.set("from", Value.fromBytes(<Bytes>value));
    }
  }

  get fromBalance(): string | null {
    let value = this.get("fromBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set fromBalance(value: string | null) {
    if (!value) {
      this.unset("fromBalance");
    } else {
      this.set("fromBalance", Value.fromString(<string>value));
    }
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(<Bytes>value));
    }
  }

  get toBalance(): string | null {
    let value = this.get("toBalance");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set toBalance(value: string | null) {
    if (!value) {
      this.unset("toBalance");
    } else {
      this.set("toBalance", Value.fromString(<string>value));
    }
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get valueExact(): BigInt {
    let value = this.get("valueExact");
    return value!.toBigInt();
  }

  set valueExact(value: BigInt) {
    this.set("valueExact", Value.fromBigInt(value));
  }
}

export class Ownable extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ownable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Ownable must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Ownable", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Ownable | null {
    return changetype<Ownable | null>(store.get("Ownable", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get ownershipTransferred(): Array<string> {
    let value = this.get("ownershipTransferred");
    return value!.toStringArray();
  }

  set ownershipTransferred(value: Array<string>) {
    this.set("ownershipTransferred", Value.fromStringArray(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class AccessControl extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControl entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AccessControl must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccessControl", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AccessControl | null {
    return changetype<AccessControl | null>(
      store.get("AccessControl", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }
}

export class Role extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Role entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Role must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Role", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Role | null {
    return changetype<Role | null>(store.get("Role", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get roleOf(): Array<string> {
    let value = this.get("roleOf");
    return value!.toStringArray();
  }

  set roleOf(value: Array<string>) {
    this.set("roleOf", Value.fromStringArray(value));
  }
}

export class AccessControlRole extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccessControlRole entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccessControlRole must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccessControlRole", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRole | null {
    return changetype<AccessControlRole | null>(
      store.get("AccessControlRole", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value!.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get admin(): string {
    let value = this.get("admin");
    return value!.toString();
  }

  set admin(value: string) {
    this.set("admin", Value.fromString(value));
  }

  get adminOf(): Array<string> {
    let value = this.get("adminOf");
    return value!.toStringArray();
  }

  set adminOf(value: Array<string>) {
    this.set("adminOf", Value.fromStringArray(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }

  get roleGranted(): Array<string> {
    let value = this.get("roleGranted");
    return value!.toStringArray();
  }

  set roleGranted(value: Array<string>) {
    this.set("roleGranted", Value.fromStringArray(value));
  }

  get roleRevoked(): Array<string> {
    let value = this.get("roleRevoked");
    return value!.toStringArray();
  }

  set roleRevoked(value: Array<string>) {
    this.set("roleRevoked", Value.fromStringArray(value));
  }

  get roleAdminChanged(): Array<string> {
    let value = this.get("roleAdminChanged");
    return value!.toStringArray();
  }

  set roleAdminChanged(value: Array<string>) {
    this.set("roleAdminChanged", Value.fromStringArray(value));
  }
}

export class AccessControlRoleMember extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AccessControlRoleMember entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AccessControlRoleMember must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccessControlRoleMember", id.toString(), this);
    }
  }

  static load(id: string): AccessControlRoleMember | null {
    return changetype<AccessControlRoleMember | null>(
      store.get("AccessControlRoleMember", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get accesscontrolrole(): string {
    let value = this.get("accesscontrolrole");
    return value!.toString();
  }

  set accesscontrolrole(value: string) {
    this.set("accesscontrolrole", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class RoleAdminChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleAdminChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RoleAdminChanged must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RoleAdminChanged", id.toString(), this);
    }
  }

  static load(id: string): RoleAdminChanged | null {
    return changetype<RoleAdminChanged | null>(
      store.get("RoleAdminChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get newAdminRole(): string {
    let value = this.get("newAdminRole");
    return value!.toString();
  }

  set newAdminRole(value: string) {
    this.set("newAdminRole", Value.fromString(value));
  }

  get previousAdminRole(): string {
    let value = this.get("previousAdminRole");
    return value!.toString();
  }

  set previousAdminRole(value: string) {
    this.set("previousAdminRole", Value.fromString(value));
  }
}

export class RoleGranted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleGranted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RoleGranted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RoleGranted", id.toString(), this);
    }
  }

  static load(id: string): RoleGranted | null {
    return changetype<RoleGranted | null>(store.get("RoleGranted", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class RoleRevoked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RoleRevoked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RoleRevoked must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RoleRevoked", id.toString(), this);
    }
  }

  static load(id: string): RoleRevoked | null {
    return changetype<RoleRevoked | null>(store.get("RoleRevoked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get role(): string {
    let value = this.get("role");
    return value!.toString();
  }

  set role(value: string) {
    this.set("role", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}
