// One-time cleanup worker for an accidental Duck Habit Hub upload.
// It removes only Duck Habit Hub caches, unregisters itself,
// and does NOT touch localStorage / Duck Budget data.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key.startsWith("duck-habit-hub-"))
        .map(key => caches.delete(key))
    );

    await self.registration.unregister();

    const windows = await self.clients.matchAll({
      type: "window",
      includeUncontrolled: true
    });

    for (const client of windows) {
      try {
        await client.navigate(client.url);
      } catch (_) {}
    }
  })());
});

self.addEventListener("fetch", () => {});
