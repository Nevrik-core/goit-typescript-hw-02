/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}
interface PageInfoProps {
  title: string;
}

class Page extends Component<PageInfoProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};