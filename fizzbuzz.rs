
fn fizzbuzz (num:i32)-> {
    match (num % 3, num % 5) {
        (0,0) => String::from("FizzBuzz"),
        (0,_) => String::from("Fizz"),
        (_,0) => String::from("Buzz"),
        _=> num.to_String(),

    }
}

fn main () -> {
    for i in 1..=15{
        print!("{}", fizzbuzz(i));
    }
}