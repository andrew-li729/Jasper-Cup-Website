import time
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class RaceFileHandler(FileSystemEventHandler):
    def __init__(self, importer, directory):
        self.importer = importer
        self.directory = directory

    def on_created(self, event):
        if event.is_directory:
            return

        if event.src_path.endswith(".json"):
            print(f"📄 New race file detected: {event.src_path}")

            try:
                self.importer.parse_and_insert(event.src_path)
                print(f"✅ Processed: {event.src_path}")
            except Exception as e:
                print(f"❌ Error processing {event.src_path}: {e}")


class RaceWatcher:
    def __init__(self, importer, directory):
        self.importer = importer
        self.directory = directory
        self.observer = Observer()

    def start(self):
        handler = RaceFileHandler(self.importer, self.directory)
        self.observer.schedule(handler, self.directory, recursive=False)

        print(f"👀 Watching directory: {self.directory}")
        self.observer.start()

        try:
            while True:
                time.sleep(1)  # Keep the loop alive
        except KeyboardInterrupt:
            print("🛑 Stopping directory watcher...")
            self.observer.stop()

        self.observer.join()
