import { Ear, Lightbulb, Target } from "lucide-react";

export default function FeatureBar() {
  return (
    <section className="bg-[var(--karas_aubergine)] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 text-center md:text-left">

          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Ear className="h-8 w-8 text-[var(--karas_aubergine)]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                We begin with listening.
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Understanding the full context comes <br className="hidden md:block" />
                before any recommendation.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Lightbulb className="h-8 w-8 text-[var(--karas_aubergine)]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                We recommend deliberately.
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Intervention is chosen only when it <br className="hidden md:block" />
                improves outcome.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white">
              <Target className="h-8 w-8 text-[var(--karas_aubergine)]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                We follow through.
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Health is reviewed and managed <br className="hidden md:block" />
                over time, not just during visits.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}