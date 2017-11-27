import { Component, OnInit, Input, OnChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { ApiService } from '../../../shared/api.service';
import { IStore } from 'app-shared';

/**
<api-state [state]="conditions.state" ignore="modifying" [hover]="true" *ngIf="conditionsState$ | async as conditions">
Transcluded content here
</api-state>
 */

@Component({
    selector: 'api-state',
	templateUrl: './api-state.component.html',
	styles: [`
        .toaster{position:fixed;bottom:10px;right:20px;z-index:1000;}
        .toaster-lg{font-size:3rem;}
    `],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiStateComponent implements OnInit, OnChanges, OnDestroy {
    /** API State */
	@Input() state: IStore.ApiStatus;
    /** Should the success/loading/error messages appear inline or as a toaster pop in the lower right of the screen */
	@Input() toaster: boolean = true;
	/** Should the success message be visible or not */
	@Input() showSuccess: boolean = true;
    /** Set this flag after the initial load of data */
	public initialLoadComplete: boolean = false;
    /** Toggle the visibility of the success message */
	public successVisible: boolean = true;

	constructor(
		private api: ApiService
	) { }

	ngOnInit() {}

	ngOnChanges() {
		if (this.state.loaded) {
			this.initialLoadComplete = true;
		}
		this.successVisible = true;
	}

    /**
     * Close the alert and clear success state
     */
	public closeSuccess() {
		this.successVisible = false;
		this.api.resetSuccess();
	}

	ngOnDestroy() { }

}