export interface FeedProps {
  articles: Array<any> | void | undefined,
  articleFunctions: object,
  favorites: Array<any>
}

export interface Styles {
  container: object
}

export interface ArticleProps {
  article: object,
  key: number,
  articleFunctions: object,
  favorites: Array<any>
}

export interface AppbarProps {
  filterFeed: any
}

export interface RadioButtonProps {
  radioButtonFunctions: object
}


