import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Section from "../Section";
import Modal from "../Modal";
import { wedding } from "../../config/wedding";
export default function MoiSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const start = (amount: string) => {
    setSelected(amount);
    setStep(1);
    window.setTimeout(() => setStep(2), 1000);
    window.setTimeout(() => setStep(3), 3000);
    window.setTimeout(() => setStep(4), 5000);
  };
  return (
    <Section
      id="gift-us"
      eyebrow="Gift Us"
      title="Kalyanam Moi"
      intro="Website lam pannirkom. Paathu seinga, frens 😁"
    >
      <div className="moi-layout">
        <div className="qr-wrap" style={{ textAlign: "center" }}>
          <QRCodeSVG
            value={wedding.moi.qrValue}
            size={180}
            bgColor="#fffaf4"
            fgColor="#201b19"
            includeMargin
          />
          GPAY | UPI
        </div>
        <div>
          <p>
            We know you guys are choosing 2000/- and nothing else 🙂 <br></br>
            Right? Right??
          </p>
          <div className="amount-grid">
            {wedding.moi.amounts.map((amount) => (
              <button
                className="amount-button"
                key={amount}
                onClick={() => start(amount)}
              >
                {amount}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal open={Boolean(selected)} onClose={() => setSelected(null)}>
        <div className="moi-modal">
          {step < 4 && (
            <>
              <span className="eyebrow">
                {step === 1
                  ? "Processing..."
                  : step === 2
                    ? "Connecting to UPI..."
                    : "Transaction in progress..."}
              </span>
              <div className="fake-loader" />
            </>
          )}
          {step >= 4 && (
            <>
              <h2>Paaahh 😂</h2>
              <p>
                Moi lam veika manasu irukaa? Apdi iruntha nerla vanthu saptutu
                veinga. 😊
              </p>
              <strong>Your presence is more than enough for us!</strong>
              <p>
                Seriously. Come, eat, meet everyone, take photos and have a good
                time.
              </p>
              <button
                className="button button-dark"
                onClick={() => setSelected(null)}
              >
                Cringe than.. cringe than 🙂
              </button>
            </>
          )}
        </div>
      </Modal>
    </Section>
  );
}
