/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NVL7MzDI7gW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Join the waitlist</h1>
        <p className="text-muted-foreground">Get daily vetted SRE and DevOps jobs</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" placeholder="" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">LinkedIn *</Label>
          <Input id="linkedin" placeholder="" required />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </div>
    </div>
  )
}