import { GestureDescription, Finger, FingerCurl, FingerDirection } from 'fingerpose';

export const Gestures = {};

// Helper to create basic gestures
const createGesture = (name) => new GestureDescription(name);

// --- ASL Alphabet (Static) ---

// A: Fist, thumb against side of index
const aSign = createGesture('A');
// Thumb: No Curl, Vertical Up (approx)
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.9);
// Others: Full Curl
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    aSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.A = aSign;

// B: Open palm, thumb tucked in
const bSign = createGesture('B');
bSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    bSign.addCurl(f, FingerCurl.NoCurl, 1.0);
    bSign.addDirection(f, FingerDirection.VerticalUp, 0.9);
});
Gestures.B = bSign;

// C: C-shape
const cSign = createGesture('C');
[Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring].forEach(f => {
    cSign.addCurl(f, FingerCurl.HalfCurl, 1.0);
});
cSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
Gestures.C = cSign;

// D: Index up, others curled/touching thumb
const dSign = createGesture('D');
dSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
dSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
[Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    dSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
dSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9); // Thumb touches fingers
Gestures.D = dSign;

// E: All fingers curled, thumb tucked under
const eSign = createGesture('E');
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    eSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
eSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0); // thumb hooked under
Gestures.E = eSign;

// F: OK sign (Index+Thumb touch, others up)
const fSign = createGesture('F');
fSign.addCurl(Finger.Index, FingerCurl.FullCurl, 0.9); // Touching thumb
fSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
[Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    fSign.addCurl(f, FingerCurl.NoCurl, 1.0);
    fSign.addDirection(f, FingerDirection.VerticalUp, 0.9);
});
Gestures.F = fSign;

// G: Pointing right (or left) with Index, thumb parallel
const gSign = createGesture('G');
gSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9);
gSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.9);
gSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// Others curled
[Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    gSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.G = gSign;

// H: Index+Middle horizontal
const hSign = createGesture('H');
hSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
hSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9);
hSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.9);
[Finger.Ring, Finger.Pinky].forEach(f => {
    hSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.H = hSign;

// I: Pinky up, others curled
const iSign = createGesture('I');
iSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
[Finger.Index, Finger.Middle, Finger.Ring].forEach(f => {
    iSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.I = iSign;

// J: Pinky up but moving (simulated as I for static)
// We will skip J to avoid confusion with I, or require a specific rotation.

// K: V-shape but thumb matches index
const kSign = createGesture('K');
kSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
kSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
kSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
kSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0); // Thumb up between
[Finger.Ring, Finger.Pinky].forEach(f => {
    kSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.K = kSign;

// L: L-shape (Thumb+Index)
const lSign = createGesture('L');
lSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
lSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);
lSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);
[Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    lSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.L = lSign;

// M: 3 fingers over thumb
const mSign = createGesture('M');
[Finger.Index, Finger.Middle, Finger.Ring].forEach(f => {
    mSign.addCurl(f, FingerCurl.FullCurl, 0.9);
    // Actually they are folded over the thumb, which is hard to distinguish from Fist (S) or E without depth.
    // We try to check for "NoCurl" but pointing down? No. 
    // M is hard for basic Handpose. Approximating as:
    // Fingers curled but not FULLY?
});
mSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
// Getting M right is tricky. Let's try basic "Fist" but check thumb position? 
// Handpose doesn't give thumb-under-finger reliability.
// Skipping M for reliability to avoid false positives with S/A/E unless customized.

// N: 2 fingers over thumb
// Same issue as M.

// O: O-shape
const oSign = createGesture('O');
[Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    oSign.addCurl(f, FingerCurl.HalfCurl, 1.0); // All tips touching
});
Gestures.O = oSign;

// P: Upside down K (Hard for static handpose which expects upright)
// Skipping P.

// Q: Upside down G
// Skipping Q.

// R: Crossed fingers
const rSign = createGesture('R');
rSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
rSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
// They should be crossed. Handpose doesn't detect "crossing".
// It will look like U.
// We can check if index and middle x-coordinates are reversed or very close?
// Fingerpose only does curl/direction.
// So R is indistinguishable from U in this library without custom distance logic.
// We will alias U to R/U contextually or just enable one. 
// For now, let's keep U.

// S: Fist, thumb OVER fingers
const sSign = createGesture('S');
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    sSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
sSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9); // Thumb across
// A has Thumb VerticalUp. S has Thumb across (HalfCurl/FullCurl).
Gestures.S = sSign;

// T: Thumb between Index and Middle
// Hard to distinguish from Fist.

// U: Index+Middle up together
const uSign = createGesture('U');
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
[Finger.Ring, Finger.Pinky].forEach(f => {
    uSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.U = uSign;

// V: Victory (Index+Middle spread)
const vSign = createGesture('V');
vSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
vSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
vSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
vSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);
[Finger.Ring, Finger.Pinky].forEach(f => {
    vSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.V = vSign;

// W: 3 fingers up
const wSign = createGesture('W');
[Finger.Index, Finger.Middle, Finger.Ring].forEach(f => {
    wSign.addCurl(f, FingerCurl.NoCurl, 1.0);
    wSign.addDirection(f, FingerDirection.VerticalUp, 1.0);
});
wSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
wSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0); // or connected to pinky
Gestures.W = wSign;

// X: Hooked index
const xSign = createGesture('X');
xSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0); // Hook
[Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    xSign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.X = xSign;

// Y: Hang loose (Thumb+Pinky)
const ySign = createGesture('Y');
ySign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ySign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
[Finger.Index, Finger.Middle, Finger.Ring].forEach(f => {
    ySign.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.Y = ySign;

// Z: Drawing Z (Dynamic)
// Skipping Z.

// Common Words
const thumbsUp = createGesture('Good Job!');
thumbsUp.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUp.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    thumbsUp.addCurl(f, FingerCurl.FullCurl, 1.0);
});
Gestures.thumbs_up = thumbsUp;

const openHand = createGesture('Hello!');
[Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach(f => {
    openHand.addCurl(f, FingerCurl.NoCurl, 1.0);
});
Gestures.open_hand = openHand;
