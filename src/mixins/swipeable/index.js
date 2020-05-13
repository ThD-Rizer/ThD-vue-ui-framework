/**
 * Фабрика миксина для компонентов, которые можно свайпать
 *
 * @returns {Object}
 */
export default {
  props: {
    swipeable: {
      type: Boolean,
      default: false,
    },
    swipeThreshold: {
      type: Number,
      default: 150,
    },
    swipeRestraint: {
      type: Number,
      default: 100,
    },
    swipeTime: {
      type: Number,
      default: 300,
    },
  },
  data: () => ({
    swipeStart: false,
    swipeStartTime: null,
    swiped: null,
    touchPosition: {
      startX: 0,
      startY: 0,
    },
  }),
  computed: {
    getSwipeElement() {
      return this.swipeElement || window;
    },
  },
  mounted() {
    if (this.swipeable) {
      this.getSwipeElement.addEventListener('touchstart', this.handleTouchStart, false);
      this.getSwipeElement.addEventListener('touchend', this.handleTouchEnd, false);
      this.getSwipeElement.addEventListener('touchmove', this.handleTouchMove, false);
    }
  },
  beforeDestroy() {
    if (this.swipeable) {
      this.getSwipeElement.removeEventListener('touchstart', this.handleTouchStart, false);
      this.getSwipeElement.removeEventListener('touchend', this.handleTouchEnd, false);
      this.getSwipeElement.removeEventListener('touchmove', this.handleTouchMove, false);
    }
  },
  methods: {
    handleTouchStart(event) {
      this.touchPosition.startX = event.touches[0].screenX;
      this.touchPosition.startY = event.touches[0].screenY;
      this.swipeStartTime = new Date();

      this.swipeStart = true;
    },
    handleTouchMove(event) {
      if (this.swipeStart) {
        const touchmoveX = event.touches[0].screenX;
        const touchmoveY = event.touches[0].screenY;

        const actualX = touchmoveX - this.touchPosition.startX;
        const actualY = touchmoveY - this.touchPosition.startY;

        const elapsedTime = new Date() - this.swipeStartTime;

        if (elapsedTime <= this.swipeTime) {
          const isHorizontalSwiped = (
            Math.abs(actualX) >= this.swipeThreshold
            && Math.abs(actualY) <= this.swipeRestraint
          );
          const isVerticalSwiped = (
            Math.abs(actualY) >= this.swipeThreshold
            && Math.abs(actualX) <= this.swipeRestraint
          );

          if (isHorizontalSwiped) {
            this.swiped = actualX < 0 ? 'left' : 'right';
          } else if (isVerticalSwiped) {
            this.swiped = actualY < 0 ? 'up' : 'down';
          }
        }
      }
    },
    handleTouchEnd() {
      this.touchPosition = {
        startX: 0,
        startY: 0,
      };
      this.swiped = null;
      this.swipeStart = false;
    },
  },
};
