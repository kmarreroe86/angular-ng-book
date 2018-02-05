export class Article {

  votes: number;
  title: string;
  link: string;

  constructor(title: string, link: string, votes: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  voteUp() {
    this.votes++;
  }

  voteDown() {
    this.votes--;
  }

  domain(): string {
    try {
      const domainPath: string = this.link.split('//')[1];
      return domainPath.split('/')[0];
    } catch (err) {
    }
    return null;
  }
}
