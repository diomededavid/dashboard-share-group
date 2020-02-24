import { Component } from '@angular/core';
import {SnackbarService} from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-share-group',
  templateUrl: './dashboard-share-group.component.html',
  styleUrls: ['./dashboard-share-group.component.scss']
})
export class DashboardShareGroupComponent {

  constructor( private snackBar: SnackbarService) {}

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.snackBar.success('Link Copied to Clipboard', '');
    close();
  }
}
