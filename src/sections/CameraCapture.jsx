import React, { useRef, useEffect } from "react";

const CameraCapture = ({ onCapture, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    startCamera();
    return () => stopCamera(); // Cleanup on unmount
  }, []);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((err) => {
        console.error("Camera access denied:", err);
        alert("Unable to access the camera!");
        onClose();
      });
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photo = canvas.toDataURL("image/png");
    onCapture(photo); // Pass photo to parent
    stopCamera(); // Stop the camera
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <video ref={videoRef} className="w-full rounded mb-4" />
        <div className="flex justify-between">
          <button
            onClick={capturePhoto}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Capture Photo
          </button>
          <button
            onClick={() => {
              stopCamera();
              onClose();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;
