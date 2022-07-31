import { Avatar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize, TextField } from '@mui/material'
import Head from 'next/head'
import React, { Dispatch, SetStateAction } from 'react'
import Navbar from '../components/shared/Navbar/Navbar'
import TechStackAutoComplete from '../components/shared/TechStackAutoComplete'

const editProfile = () => {
    const [collegeName, setcollegeName] = React.useState<string>("")
    const [graduationYear, setgraduationYear] = React.useState<string>()
    const [bio, setbio] = React.useState<string>("")
    const [linkedInURL, setlinkedInURL] = React.useState<string>("")
    const [gitHubURL, setgitHubURL] = React.useState<string>("")
    const [twitterURL, settwitterURL] = React.useState<string>("")
    const [portfolioURL, setportfolioURL] = React.useState<string>("")
    const [projectTechStacks, setProjectTechStacks] = React.useState<{ name: string }[]>();
    const handleChange = (event: SelectChangeEvent) => {
        setgraduationYear(event.target.value as string);
    };
    return (
        <>
            <Head>
                <title>Edit Event</title>
            </Head>
            <Navbar />
            <form className="mx-auto text-xl mt-11 mb-10 w-10/12">
                <div className="space-y-4 ">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        <div className="col-span-1">
                            <Avatar alt="profile Image" src="/profilePic.png" className="w-[150px] h-[150px] xl:w-[180px] xl:h-[180px] mt-10" />
                        </div>
                        <div className="space-y-4 col-span-1 lg:col-span-4">
                            <div className="flex flex-col items-start font-semibold my-6 text-4xl">
                                Edit Profile
                            </div>
                            <h2 className="text-2xl my-3">Personal Details</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div className="col-span-1 space-y-4">

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="College Name"
                                            placeholder="Enter College Name"
                                            multiline
                                            fullWidth
                                            required
                                            onChange={e => setcollegeName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Graduate Year"
                                            placeholder="Enter Graduate Year"
                                            multiline
                                            fullWidth
                                            required
                                            onChange={e => setgraduationYear(e.target.value)}
                                        />
                                    </div>
                                    <div >
                                        <TechStackAutoComplete projectTechStacks={projectTechStacks as { name: string; }[]} setProjectTechStacks={setProjectTechStacks as Dispatch<SetStateAction<{ name: string; }[]>>} />
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="debu@gmail.com"
                                            placeholder=""
                                            multiline
                                            fullWidth
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="Bio"
                                            label="Enter your Bio"
                                            placeholder=""
                                            multiline
                                            fullWidth
                                            rows={4}
                                            onChange={e => setbio(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>

                                <h2 className="text-2xl mt-12 mb-6">Social Links</h2>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                <div className="col-span-1 space-y-4">

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="LinkedIn Url"
                                            placeholder="Enter your LinkedIn Url"
                                            multiline
                                            fullWidth

                                            onChange={e => setlinkedInURL(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="GitHub Url"
                                            placeholder="Enter your GitHub Url"
                                            multiline
                                            fullWidth

                                            onChange={e => setgitHubURL(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Twitter Url"
                                            placeholder="Enter your Twitter Url"
                                            multiline
                                            fullWidth

                                            onChange={e => settwitterURL(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="outlined-textarea"
                                            label="Portfolio Url"
                                            placeholder="Enter your Portfolio Url"
                                            multiline
                                            fullWidth

                                            onChange={e => setportfolioURL(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>







                            <div >
                                <div className="space-x-4 mt-12">
                                    <button className="btn-blue">
                                        Save
                                    </button>
                                    <button className="btn-red">
                                        Discard
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </form>
        </>
    )
}

export default editProfile