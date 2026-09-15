const templates = [
  {
    id: 1,
    url: "https://wedding-ui-01.vercel.app/",
    title: "Mẫu thiệp cưới online 01",
    img_url: "",
  },
  {
    id: 2,
    url: "https://wedding-ui-02.vercel.app/",
    title: "Mẫu thiệp cưới online 02",
    img_url: "./screencapture-wedding-ui-02.png",
  },
  {
    id: 3,
    url: "https://wedding-ui-03.vercel.app/",
    title: "Mẫu thiệp cưới online 03",
    img_url: "./screencapture-wedding-ui-03.png",
  },
  {
    id: 4,
    url: "https://wedding-ui-04.vercel.app/",
    title: "Mẫu thiệp cưới online 04",
    img_url: "./screencapture-wedding-ui-04.jpg",
  },
  {
    id: 5,
    url: "https://wedding-ui-05.vercel.app/",
    title: "Mẫu thiệp cưới online 05",
    img_url: "",
  },
  {
    id: 6,
    url: "https://wedding-ui-06.vercel.app/",
    title: "Mẫu thiệp cưới online 06",
    img_url: "./screencapture-wedding-ui-06.png",
  },
  {
    id: 7,
    url: "https://wedding-ui-07.vercel.app/",
    title: "Mẫu thiệp cưới online 07",
    img_url: "",
  },
  {
    id: 8,
    url: "https://wedding-ui-08.vercel.app/",
    title: "Mẫu thiệp cưới online 08",
    img_url: "",
  },
  {
    id: 9,
    url: "https://wedding-ui-09.vercel.app/",
    title: "Mẫu thiệp cưới online 09",
    img_url: "",
  },
  {
    id: 10,
    url: "https://wedding-ui-10.vercel.app/",
    title: "Mẫu thiệp cưới online 10",
    img_url: "./screencapture-wedding-ui-10.png",
  },
  {
    id: 11,
    url: "https://wedding-ui-11.vercel.app/",
    title: "Mẫu thiệp cưới online 11",
    img_url: "./screencapture-wedding-ui-11.png",
  },
  {
    id: 12,
    url: "https://wedding-ui-12.vercel.app/",
    title: "Mẫu thiệp cưới online 12",
    img_url: "./screencapture-wedding-ui-12.png",
  },
];

export default function WeddingUIPage() {
  const sortedTemplates = [...templates].sort((a, b) => b.id - a.id);

  return (
    <main className="min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Mẫu thiệp cưới online
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Khám phá các mẫu thiệp cưới đẹp và hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedTemplates.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border bg-card shadow-sm"
            >
              {/* Preview */}
              <div className="relative h-105 overflow-y-auto overscroll-contain bg-muted">
                {item.img_url ? (
                  <img
                    src={item.img_url}
                    alt={item.title}
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      Chưa có ảnh preview
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex items-center justify-between gap-3 p-4">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{item.title}</p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Template #{String(item.id).padStart(2, "0")}
                  </p>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg border px-3 py-2 text-sm font-medium transition hover:bg-accent"
                >
                  Xem mẫu
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
