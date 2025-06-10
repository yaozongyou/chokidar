import { watch } from 'node:fs';
watch('/home/richardyao/watch-root', {
  recursive: true,
  persistent: true,
}, (eventType, filename) => {
  console.log("eventType", eventType, "filename", filename);
});

