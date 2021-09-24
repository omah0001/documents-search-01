import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'documentsFilter'
})
export class DocumentsFilterPipe implements PipeTransform {
  transform(documents: any[], ...args: any[]): any[] {
    if (args && args.length > 0 && args[0]) {
      return documents.filter(document => {
        return document.label.toLowerCase().includes(args[0].toLowerCase());
      });
    }
    return documents;
  }
}
