"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Settings = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const Preferences = require("./preferences");
/**
 * Profile settings, entity class.
 */
let Settings = class Settings extends Class.Null {
    /**
     * Get the region preferences according to the specified region code.
     * @param region Region code.
     * @returns Returns the region preferences that corresponds to the given region code.
     */
    getRegionPreferences(region) {
        if (region !== void 0 && this.regionPreferences !== void 0 && this.regionPreferences[region] !== void 0) {
            return this.regionPreferences[region];
        }
        return {};
    }
    /**
     * Get the current region preferences.
     * @returns Returns the current region preferences.
     */
    getCurrentRegionPreferences() {
        return this.getRegionPreferences(this.regionLanguage);
    }
};
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Settings.prototype, "platformLanguage", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Settings.prototype, "regionLanguage", void 0);
__decorate([
    RestDB.Schema.Map(Preferences.Region),
    Class.Public()
], Settings.prototype, "regionPreferences", void 0);
__decorate([
    Class.Public()
], Settings.prototype, "getRegionPreferences", null);
__decorate([
    Class.Public()
], Settings.prototype, "getCurrentRegionPreferences", null);
Settings = __decorate([
    RestDB.Schema.Entity('profiles/settings'),
    Class.Describe()
], Settings);
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map