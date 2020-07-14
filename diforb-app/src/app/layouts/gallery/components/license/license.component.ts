import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
    selector: 'app-license',
    template: `
        <h1>DIFORB LICENSE AGREEMENT (EULA)</h1>

	    <p>The provided Sounds and Sound Libraries are the property Diforb.</p>
	    <p>Permission is hereby granted, free of charge, to any person or organization to use these Sounds for commercial or non-commercial purposes without the prior permission from Diforb under the terms of this License Agreement. This samples may not be resold or redistributed (commercially or otherwise) in any way, either individually or repackaged in whole or in part as audio samples, sound libraries or sound effects.</p>
	    <p>Getting any of sound effects from Diforb, you accept and agree to all the issues and terms stated in this License Agreement. <p>
	    <p>If you have any questions, please, contact us by e-mail <a href="mailto:support@diforb.com">support@diforb.com</a></p>
    `
})

export class LicenseComponent implements OnInit {

    constructor(
        private breadcrumbs: BreadcrumbsService
    ) {
        breadcrumbs.change({ breadcrumbs: 'License agreement' })
    }

    ngOnInit() { }
}