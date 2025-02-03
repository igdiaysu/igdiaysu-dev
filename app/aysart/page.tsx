import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, Twitch, Music, Video, Book, Code, Coffee, Gamepad } from 'lucide-react'
import Image from "next/image"

export default function AysArtLinksPage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <Avatar className="h-32 w-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile picture" />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">AysArt</h1>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Yirmili yaşlarda, kendi halinde; biraz çizer, biraz sudoku delisi, biraz suç düşkünü birisi 🕵️ Mükemmel bir interneti yok; çok kaliteli yayın bekleme yani. Ama sohbetine tatlı derler; onun için uğrayabilirsin ✨
            </p>
            <div className="mt-2 flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Türkiye</span>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Twitch className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="font-semibold">Twitch - tüm yayınlar</h3>
                <p className="text-sm text-muted-foreground">twitch.tv</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm">Multistream yayınlarımda ikinci platform, yayının kategorisine göre değişiklik göstermektedir</p>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <h2 className="text-lg font-semibold">Sıklıkla yayın açtığım kategoriler</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Co-working & Studying",
              "Art",
              "Just Chatting",
              "Minecraft",
              "Tom Clancy's The Division 2",
              "Ranch Simulator"
            ].map((category) => (
              <Badge key={category} variant="secondary" className="justify-start p-2 text-base">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Setup */}
        <div>
          <h2 className="mb-4 text-lg font-semibold">Cihazlarım</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Valorant mousepad"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Logitech keyboard and mouse"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Example Bento Boxes */}
        <div className="mt-6">
          <h2 className="mb-4 text-lg font-semibold">Example Bento Boxes</h2>
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-3">
            {/* 1x2 Box */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg md:row-span-2">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <Music className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium">Music Playlist</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Check out my latest music playlist. Updated weekly with fresh tunes!
                  </p>
                </div>
                <Button variant="outline" className="mt-4">Listen Now</Button>
              </CardContent>
            </Card>

            {/* 2x2 Box */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg md:col-span-2 md:row-span-2">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-yellow-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <Video className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium">Featured Video</h3>
                  </div>
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Featured video thumbnail"
                      width={400}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Watch my latest video on game development techniques and tips.
                  </p>
                </div>
                <Button className="mt-4">Watch Video</Button>
              </CardContent>
            </Card>

            {/* 2x1 Box */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg md:col-span-2">
              <CardContent className="flex items-center justify-between p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="rounded-full bg-muted p-2">
                    <Book className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Reading List</h3>
                    <p className="text-sm text-muted-foreground">Check out my current book recommendations</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">View List</Button>
              </CardContent>
            </Card>

            {/* 1x3 Box */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg md:row-span-3">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-muted p-2">
                      <Code className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium">Coding Projects</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <Coffee className="h-4 w-4" />
                      <span className="text-sm">Coffee Shop App</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Gamepad className="h-4 w-4" />
                      <span className="text-sm">Retro Game Engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="h-4 w-4" />
                      <span className="text-sm">Music Visualizer</span>
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="mt-4">View All Projects</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"

