export const ACCESS_COOKIE_NAME = "ph_private_share";
export const DEV_ACCESS_CODE = "champion";

export const publicSiteConfig = {
  dataRoomUrl: process.env.NEXT_PUBLIC_DATA_ROOM_URL,
  webAppDemoUrl:
    process.env.NEXT_PUBLIC_WEB_APP_DEMO_URL ??
    "https://v0-philippine-athletics-design.vercel.app",
  overviewVideoUrl: process.env.NEXT_PUBLIC_OVERVIEW_VIDEO_URL,
  overviewVideoPosterUrl: process.env.NEXT_PUBLIC_OVERVIEW_VIDEO_POSTER_URL,
  platformAudioUrl: process.env.NEXT_PUBLIC_PLATFORM_AUDIO_URL,
  ecosystemAudioUrl: process.env.NEXT_PUBLIC_ECOSYSTEM_AUDIO_URL,
  businessAudioUrl: process.env.NEXT_PUBLIC_BUSINESS_AUDIO_URL,
};

export function getExpectedAccessCode() {
  return process.env.PH_SHARE_CODE ??
    (process.env.NODE_ENV === "development" ? DEV_ACCESS_CODE : "");
}
