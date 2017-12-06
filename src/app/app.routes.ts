import { Component } from '@angular/core';
import { Routes } from '@angular/router';
/**
 * Router Setting
 *
 * Write your component (Page) here to load.
 */
export const ROUTES: Routes = [
  // This default is router like '/'.
  {

    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
