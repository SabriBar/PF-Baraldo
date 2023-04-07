    // This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js/testing";
import { provideMockStore } from '@ngrx/store/testing';
import { TestBed, getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [provideMockStore({})],
    imports: [HttpClientTestingModule]
  });
});