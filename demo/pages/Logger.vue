<template>
  <UiMain />
</template>

<script>
  import { Logger } from '@/utils/logger';

  const logger = new Logger({
    scope: 'demo',
  });

  logger.log('test log');
  logger.info('test info');
  logger.warn('test warn');
  logger.error('test error');

  export default {
    name: 'PageLogger',
  };
</script>
