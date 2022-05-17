Hi there!

Ready for Moon Active’s Backend Performance Challenge?! 🚀💪🏻

Below you will find all the details and terms related to the challenge. Please submit your solution by Sunday, May 22nd.

Important: If you’re the lucky winner, then you must be present at the Backend Meetup (at our office) on May 25th to receive the prize (MacBook Pro 16 in).


# Background Info:

Included in this repository is an index.js file.
Inside the file there’s a simple web server that implements a "Card Service".
For every request, the service provides each user a card out of the cards listed in "cards.json", and that card can be served only once per user.

**The problem**:
The current implementation is slow and inefficient, and it takes the tester program more than 10 minutes to complete a full run of a load testing cycle.

**The challenge**:
Make the service handle higher throughput and finish quicker.
The winner will be the solution with the lowest overall runtime!

**How**:
As long as you maintain the API interface and index.js as an entry point, then everything goes! :)

# Constraints and terms
+ The solution must be written in NodeJS only.
+ The solution must adhere to the "business" requirements listed above.
+ The included tester must pass successfully as scoring will be based on it.
+ For the scoring, we will run prebuilt testers and record the outcome.
+ The winner will be the one that has the solution with the lowest overall runtime to complete the challenge successfully.
+ The winner will be announced at our Backend Meetup at our office in Tel Aviv on May 25th.
+ The winner must attend the meetup to get the reward.

# How to submit
- Upload  your `index.js`, `package.json` and `package-lock.json` files to a new repository in Github - make sure it is publicly accessible.
- Submit your Github Repository in the [Google form](https://docs.google.com/forms/d/17Iatjk7XA92BntC6EPYFwbMPyKFQ2mJegA9TMvCnH-g)
- Attend the meetup.

## Challenge Setup

- Install and run a local redis server on port 6379.
- Clone this repository to your computer.
- Install nodejs runtime and run `npm install`.
- Run the web server `node index.js`.
- Make a test call to `http://localhost:3000/card_add?id=0`.
- You should receive a payload like this:
```json
{
  "id": "410bc4fc-23a9-4cd0-81fb-c96453516b47",
  "name": "16b5b50b-64c9-4edd-8cb3-464be756eaac"
}
```
- Run the tester binaries included according to your platform `./osx-intel` or `./linux`
- You should see the following payload on console:
```text
generating cards
starting node processes
waiting for node process to boot
.Example app listening at http://0.0.0.0:4001
Example app listening at http://0.0.0.0:4002
.
generating in memory store
11724 requests/second
12341 requests/second
....
```
Start hacking away and good luck! :)


*To build the tester binary from source, install go and run: *
```bash
cd tester_src 
go build -o tester main.go 
mv tester .. 
cd ..
./tester
```

For any technical problems, feel free to reach out to me:
Tali.we@moonactive.com
