/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as ApiCore from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Profiles mapper class.
 */
@Injection.Describe({ singleton: true, name: 'profiles' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(ApiCore.Client)
  @Class.Private()
  private client!: ApiCore.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): ApiCore.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Confirm the user token based on the specified request.
   * @param request Confirm request.
   * @returns Returns a promise to get the session token.
   * @throws Throws an error when the user token wasn't found.
   */
  @Class.Public()
  public async confirm(request: Requests.Confirm): Promise<string> {
    return (await this.mapper.insertEx<Requests.Confirm, string>(Requests.Confirm, request))!;
  }

  /**
   * Load the profile that corresponds to the specified profile Id.
   * @param id Profile Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the profile entity.
   * @throws Throws an error when the profile wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Load the current session profile.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the profile entity.
   * @throws Throws an error when the current session wasn't found.
   */
  @Class.Public()
  public async loadMe(fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById('me', fields))!;
  }

  /**
   * Update the profile that corresponds to the specified profile Id based on the given update request.
   * @param id Profile Id.
   * @param request Profile update request.
   * @returns Returns a promise to get true when the profile was updated, false otherwise.
   * @throws Throws an error when the profile wasn't found.
   */
  @Class.Public()
  public async modify(id: string, request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, id, request))!;
  }

  /**
   * Update the current profile based on the given update request.
   * @param request Profile update request.
   * @returns Returns a promise to get true when the profile was updated, false otherwise.
   * @throws Throws an error when the current session wasn't found.
   */
  @Class.Public()
  public async modifyMe(request: Requests.Update): Promise<boolean> {
    return (await this.mapper.updateByIdEx(Requests.Update, 'me', request))!;
  }

  /**
   * Update the user email based on the specified request.
   * @param request Email request.
   * @returns Returns a promise to get the user Id.
   * @throws Throws an error when the current session wasn't found.
   */
  @Class.Public()
  public async modifyUserEmail(request: Requests.Email): Promise<string> {
    return (await this.mapper.insertEx<Requests.Email, string>(Requests.Email, request))!;
  }

  /**
   * Recover the user password based on the specified request.
   * @param request Recovering request.
   * @returns Returns a promise to get the user Id.
   * @throws Throws an error when the current session wasn't found.
   */
  @Class.Public()
  public async recoverUserPassword(request: Requests.Recover): Promise<string> {
    return (await this.mapper.insertEx<Requests.Recover, string>(Requests.Recover, request))!;
  }

  /**
   * Update the user password based on the specified request.
   * @param request Password request.
   * @returns Returns a promise to get the user Id.
   * @throws Throws an error when the current session wasn't found.
   */
  @Class.Public()
  public async modifyUserPassword(request: Requests.Password): Promise<string> {
    return (await this.mapper.insertEx<Requests.Password, string>(Requests.Password, request))!;
  }

  /**
   * List all profiles in the same account that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the profile list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all profiles in the same account that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of profiles or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the profile that corresponds to the specified profile Id.
   * @param id Profile Id.
   * @returns Returns a promise to get true when the profile was deleted, false otherwise.
   * @throws Throws an error when the profile wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }
}
