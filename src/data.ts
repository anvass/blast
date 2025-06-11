import type { Acid, Color } from './types';

export const AminoAcidColors: Record<Acid, Color> = {
  C: '#FFEA00',
  A: '#67E4A6',
  I: '#67E4A6',
  L: '#67E4A6',
  M: '#67E4A6',
  F: '#67E4A6',
  W: '#67E4A6',
  Y: '#67E4A6',
  V: '#67E4A6',
  P: '#67E4A6',
  G: '#C4C4C4',
  D: '#FC9CAC',
  E: '#FC9CAC',
  K: '#BB99FF',
  R: '#BB99FF',
  S: '#80BFFF',
  T: '#80BFFF',
  H: '#80BFFF',
  Q: '#80BFFF',
  N: '#80BFFF',
};

export const ColorsAminoTitle: Record<Color, string> = {
  '#FFEA00': 'Cysteine',
  '#67E4A6': 'Hydrophobic',
  '#C4C4C4': 'Glycine',
  '#FC9CAC': 'Negatively charged',
  '#BB99FF': 'Positively charged',
  '#80BFFF': 'Polarly uncharged',
};

export const ColorsAminoAcid: Record<Color, Array<Acid>> = {
  '#FFEA00': ['C'],
  '#67E4A6': ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V', 'P'],
  '#C4C4C4': ['G'],
  '#FC9CAC': ['D', 'E'],
  '#BB99FF': ['K', 'R'],
  '#80BFFF': ['S', 'T', 'H', 'Q', 'N'],
};
