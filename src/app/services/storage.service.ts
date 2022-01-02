import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  public async get(key: string): Promise<string> {
    return await this._storage.get(key);
  }
  public async remove(key: string) {
    await this.storage.remove(key);
  }
  public async clear() {
    await this._storage.clear();
  }
}

export const StorageKeys = {
  NotificationDataKey: 'ntfdata',
  IsActiveKey: 'isActive',
  isLocationEnabledKey: 'isNotificationEnebled',
};
