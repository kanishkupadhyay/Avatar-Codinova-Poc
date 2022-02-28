import 'zone.js';
import 'zone.js/testing';
// import 'jest-preset-angular/presets';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule,platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(BrowserDynamicTestingModule,platformBrowserDynamicTesting(),{teardown:{destroyAfterEach:true}})