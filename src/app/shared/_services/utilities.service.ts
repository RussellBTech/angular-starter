import { Injectable } from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Injectable()
export class UtilitiesService {

	constructor(
	) {
	}
    
	/**
	* Copy the selected string to the clipboard
	*/
	public copyToClipboard(text: string) {
		if ((<any>window).clipboardData && (<any>window).setData) {
			// IE specific code path to prevent textarea being shown while dialog is visible.
			return (<any>window).clipboardData.setData("Text", text);
		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
			var textarea = document.createElement("textarea");
			textarea.textContent = text;
			textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");  // Security exception may be thrown by some browsers.
			} catch (ex) {
				console.warn("Copy to clipboard failed.", ex);
				return false;
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}
	
}
