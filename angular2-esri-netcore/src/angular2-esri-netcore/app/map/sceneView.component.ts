﻿
import { Component } from '@angular/core';

import SceneView from 'esri/views/SceneView';

import { SceneViewService } from './sceneView.service';
import { Util } from '../shared/util';

@Component({
    selector: 'esri-scene-view',
    template: `
                <div [hidden]="!sceneViewService.isSupported" id="scene-view" [class.inactive]="!sceneViewService.isActive" class="view" >
                </div>
             `
}) 
export class SceneViewComponent {

    constructor(public sceneViewService: SceneViewService) {
    }


    ngOnInit() {
    }
    
} 
