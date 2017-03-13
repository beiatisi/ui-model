import {expect} from 'chai';
import {Rect} from '../utils/Rect';
import {Zoom} from './zoom';
describe('Zoom', () => {
  it('1:1', () => {
    const zoom = new Zoom();
    zoom.activeRect = Rect.from(0, 0, 100, 100);
    zoom.activeViewport = Rect.from(0, 0, 10, 10);
    zoom.passiveRect = Rect.from(0, 0, 1000, 1000);
    zoom.changes.subscribe(() => {
      expect(zoom.passiveViewport.width).to.eql(100);
    });
  });
});
