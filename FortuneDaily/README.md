# Fortune Daily — Expo MVP

A tablet-friendly React Native / Expo starter for a daily fortune app.

## Implemented

- One persisted fortune per local calendar day
- Natural English fortune levels
- Free overview and short interpretation
- Rewarded-ad unlock simulation for full interpretation, life dimensions and one supplementary fortune
- Premium subscription simulation
- Personalized profile: birthday, zodiac, mood and goal
- History and basic trend visualization
- Premium AI follow-up prototype
- Daily notification scheduling at 8:30 AM
- Theme selector and premium feature architecture

## Start in a cloud development environment

1. Open this repository in GitHub Codespaces or another Node.js cloud IDE.
2. Change into this folder:

```bash
cd FortuneDaily
```

3. Install dependencies and start the web preview:

```bash
npm install
npm run web
```

For an Expo preview:

```bash
npm start
```

## Development adapters

`src/services/rewardedAds.ts` simulates rewarded ads. Replace it with Google Mobile Ads in an Expo development build.

`PaywallModal.tsx` simulates purchases. Replace it with RevenueCat and use verified entitlement state in production.

The AI follow-up is local placeholder logic. Production AI calls must go through a protected backend; never place provider secrets in the app.
