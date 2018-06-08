import {Component} from '@angular/core';

declare const Word: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onSetColor() {
    Word.run(function (context) {

      // Create a proxy object for the document.
      const thisDocument = context.document;

      // Queue a command to get the current selection.
      // Create a proxy range object for the selection.
      const range = thisDocument.getSelection();

      // Queue a command to replace the selected text.
      range.insertText('"This should be a reference."\n', Word.InsertLocation.replace);

      // Synchronize the document state by executing the queued commands,
      // and return a promise to indicate task completion.
      return context.sync().then(function () {
        console.log('Added reference.');
      });
    }).catch(function (error) {
      console.log('Error: ' + JSON.stringify(error));
      console.log('Debug info: ' + JSON.stringify(error.debugInfo));
    });

  }
}
