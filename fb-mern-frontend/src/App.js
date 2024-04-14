import React, { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "./config"; // Import additional authentication methods
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage methods from Firebase Storage
import Home from "./Home";
import GoogleIcon from '@mui/icons-material/Google';

function SignIn() {
    const [value, setValue] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoFile, setPhotoFile] = useState(null); // To store the selected file
    const [photoUrl, setPhotoUrl] = useState('');
    const [error, setError] = useState(null);
    const [signUpMode, setSignUpMode] = useState(false);
    const [showNoFileMessage, setShowNoFileMessage] = useState(false);

    const storage = getStorage(); // Initialize Firebase Storage

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem("email", data.user.email);
            })
            .catch((error) => {
                setError(error.message);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    };

    const handleEmailSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setValue(userCredential.user.email);
                localStorage.setItem("email", userCredential.user.email);
            })
            .catch((error) => {
                setError(error.message);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    };

    const handleEmailSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (photoFile) {
                    // Upload photo to Firebase Storage
                    const storageRef = ref(storage, `profile_photos/${userCredential.user.uid}`);
                    uploadBytes(storageRef, photoFile)
                        .then((snapshot) => {
                            // Get the download URL of the uploaded photo
                            getDownloadURL(snapshot.ref)
                                .then((url) => {
                                    // Update user profile with name and photo URL
                                    updateProfile(auth.currentUser, {
                                        displayName: name,
                                        photoURL: url
                                    }).then(() => {
                                        setValue(userCredential.user.email);
                                        localStorage.setItem("email", userCredential.user.email);
                                    }).catch((error) => {
                                        console.error("Error updating profile:", error.message);
                                    });
                                })
                                .catch((error) => {
                                    console.error("Error getting download URL:", error.message);
                                });
                        })
                        .catch((error) => {
                            console.error("Error uploading photo:", error.message);
                        });
                } else {
                    setShowNoFileMessage(true); // Show the message when no file is chosen
                    setError("Please choose a profile picture."); // Display an error message
                }
            })
            .catch((error) => {
                setError(error.message);
                setTimeout(() => {
                    setError(null);
                }, 5000);
            });
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'));
    }, []);

    // Function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPhotoFile(file);
        setShowNoFileMessage(false); // Hide the message when a file is chosen
        // Optionally, you can also preview the selected photo
        const reader = new FileReader();
        reader.onload = () => {
            setPhotoUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
         
            {value ? <Home /> :
            <>
             <span className="Facebooklogo"><img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"/></span>
                <div className="container">
                    {signUpMode && (
                        <>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <p className="PText">Select your profile picture:</p>
                            <input type="file" accept="image/*" onChange={handleFileChange} />
                            {showNoFileMessage && <p>Your profile pic is required.</p>}
                            {photoUrl && <img src={photoUrl} alt="Preview" style={{ maxWidth: "100px", maxHeight: "100px" }} />}
                        </>
                    )}
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {signUpMode ? (
                        <button className="xyz" onClick={handleEmailSignUp}>Complete SignUp </button>
                    ) : (
                        <button className="xyz" onClick={handleEmailSignIn}>Log In</button>
                    )}
                    <button className="google  xyz" onClick={handleClick}>Continue With  &nbsp;  &nbsp;  <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"/> </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button className="togel--button xyz" onClick={() => setSignUpMode(!signUpMode)}>
                        {signUpMode ? "Already Have It? Login" : "Create New Account"}
                    </button>
                </div>
                </>
            }
        </div>
    );
}

export default SignIn;
