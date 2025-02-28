import { hachureLines } from 'hachure-fill';
import { Point, Line } from '../geometry';
import { ResolvedOptions } from '../core';

export function polygonHachureLines(polygonList: Point[][], o: ResolvedOptions): Line[] {
  const angle = o.hachureAngle + 90;
  let gap = o.hachureGap;
  if (gap < 0) {
    gap = o.strokeWidth * 4;
  }
  gap = Math.max(gap, 0.1);
  return hachureLines(polygonList, gap, angle);
}