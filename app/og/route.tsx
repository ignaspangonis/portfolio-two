import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const postTitle = searchParams.get('title')
  const font = fetch(new URL('../../public/fonts/kaisei-tokumin-bold.ttf', import.meta.url)).then(
    res => res.arrayBuffer(),
  )
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage:
            'url(https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/337536585_1634454500363793_934940616337656170_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_z5BDdhWT5EAX8ca_2H&_nc_ht=scontent-waw1-1.xx&oh=00_AfBRHp8MzwfVjqzGR8SVDMp_mlJOZALamFqI9wQaxO0kTg&oe=6555C7BB)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Kaisei Tokumin',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Kaisei Tokumin',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
