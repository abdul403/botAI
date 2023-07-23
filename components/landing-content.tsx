"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonals = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best Application I've used!",
  },
  {
    name: "Abdul Kalam",
    avatar: "K",
    title: "FullStack Developer",
    description: "Great Job!",
  },
  {
    name: "Lama Dev",
    avatar: "L",
    title: "DDevops Engineer",
    description: "Love using this application!",
  },
  {
    name: "Haris khan",
    avatar: "H",
    title: "Frontend Developer",
    description: "Application Gives smooth touch,Thanks for AI tool Abdul!",
  },
];

export const LandingContent = () => {
  return (
    <div className="p-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {testimonals.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name} </p>
                  <p className="text-zinc-400 text-sm">{item.title} </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
