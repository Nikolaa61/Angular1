export interface Similarity{
  time: number,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export interface Lang{
  lang: string,
  confidence: number
}

export interface Language{
  timestamp: string,
  time: number,
  text: string,
  detectedLangs: Array<Lang>
}

export interface Sentiment1{
  score: number,
  type: string
}

export interface Sentiment{
  timestamp: string,
  time: number,
  lang: string,
  sentiment: Sentiment1
}

export interface Image{
  full: string,
  thumbnail: string
}

export interface Entity{
  title: string,
  categories: [],
  abstract: string,
  image: Image
}

export interface Anotacija{
  annotations:Array<Entity>
}
