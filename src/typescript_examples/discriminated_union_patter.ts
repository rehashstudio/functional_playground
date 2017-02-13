export interface Square {
  kind: 'square';
  size: number;
}

export interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

export interface Circle {
  kind: 'circle';
  radius: number;
}

export interface Triangle {
  kind: 'triangle';
  radius: number;
}

export type Shape = Square | Rectangle | Circle | Triangle

export function area(s: Shape): number {
  switch (s.kind) {
    case 'square': return s.size * s.size
    case 'rectangle': return s.height * s.width
    case 'circle': return Math.PI * s.radius ** 2
    case 'triangle': return 1
  }
}

