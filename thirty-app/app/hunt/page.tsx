import Form from "next/form";

export default function Hunt() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Sample clue for the next location.
          </h1>
          <Form action="/hunt">
            {/* On submission, the input value will be appended to
                the URL, e.g. /search?query=abc */}
            <div className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
              <button type="submit">Submit</button>
            </div>
          </Form>
        </div>
      </main>
    </div>
  );
}