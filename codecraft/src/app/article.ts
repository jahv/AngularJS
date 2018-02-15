export class Article {
  private title: string;
  private date: Date;
  private content: string;
  private kind: string;

  constructor(title: string, date: Date, content: string, kind: string) {
    this.title = title;
    this.date = date;
    this.content = content;
    this.kind = kind;
  }

}
